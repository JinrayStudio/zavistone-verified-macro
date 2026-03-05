import { NextResponse } from 'next/server';
import { signToken } from '@/app/lib/auth';
import { supabaseAdmin } from '@/app/lib/supabase';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: 'OAuth code missing' }, { status: 400 });
    }

    try {
        // [Meta OAuth Handshake Mock]
        // 1. Exchange code for short-lived access token
        // 2. Fetch User Profile & Follower Relationship
        const metaUserId = 'meta_test_user_id';

        // Simulate Follow Verification (Only users who follow can access)
        // If not a follower:
        const isFollower = true; // Hardcoded for this build

        if (!isFollower) {
            // If follower confirmed: issue time-limited JWT. If not: Deny.
            return NextResponse.json({ error: 'Access Denied. You must follow the Instagram account.' }, { status: 403 });
        }

        // 3. Store User ID and Verification Timestamp (User Logging)
        await supabaseAdmin.from('user_access_logs').insert({
            meta_user_id: metaUserId,
            platform: 'instagram',
            is_follower: true,
            last_verified_at: new Date().toISOString()
        });

        // 4. Issue time-limited JWT
        const token = await signToken({ metaUserId, isFollower });

        // Redirect to Dashboard with Token set as Secure HTTP-only cookie
        const response = NextResponse.redirect(new URL('/dashboard', request.url));
        response.cookies.set('jwt_auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/'
        });

        return response;

    } catch (error) {
        console.error('OAuth Error:', error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
    }
}
