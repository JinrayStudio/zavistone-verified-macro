import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from '@/app/lib/auth';

// 1. Token Verification Middleware
// All report endpoints require valid token.
// Expired token → access denied (redirects to home)

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Redis and Ratelimit only if connected to production DB
const redis = (process.env.UPSTASH_REDIS_REST_URL && !process.env.UPSTASH_REDIS_REST_URL.includes('mock'))
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
    : null;

const ratelimit = redis ? new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '10'), '1 m'),
}) : null;

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 1. Security Safeguard: Prevent Scraping (Basic User-Agent Check & Rate Limiting)
    if (pathname.startsWith('/api/') || pathname.startsWith('/dashboard')) {
        const ip = req.ip ?? '127.0.0.1';

        // Basic Scraper & Bot detection via Headers
        const userAgent = req.headers.get('user-agent') || '';
        if (userAgent.toLowerCase().includes('python') || userAgent.toLowerCase().includes('bot') || userAgent.toLowerCase().includes('scraper')) {
            return NextResponse.json({ error: 'Access Denied: Automated scraping prohibited.' }, { status: 403 });
        }

        // Redis Rate Limiting
        if (ratelimit) {
            const { success, limit, reset, remaining } = await ratelimit.limit(ip);
            if (!success) {
                return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
            }
        }
    }

    // 2. Token Verification Middleware for Dashboard
    if (pathname.startsWith('/dashboard')) {
        const token = req.cookies.get('jwt_auth_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/', req.url));
        }

        const payload = await verifyToken(token);
        if (!payload?.isFollower) {
            return NextResponse.redirect(new URL('/', req.url));
        }

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
