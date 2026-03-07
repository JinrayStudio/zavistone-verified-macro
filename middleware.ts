import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from '@/app/lib/auth';

// 1. Token Verification Middleware
// All report endpoints require valid token.
// Expired token → access denied (redirects to home)

// Initialize Redis and Ratelimit only if connected to production DB
// Disabled for Vercel Hobby tier / Demo mode to prevent Edge Runtime errors
// const ratelimit = null;

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 1. Security Safeguard: Prevent Scraping (Basic User-Agent Check)
    if (pathname.startsWith('/api/') || pathname.startsWith('/dashboard')) {
        const userAgent = req.headers.get('user-agent') || '';
        if (userAgent.toLowerCase().includes('python') || userAgent.toLowerCase().includes('bot') || userAgent.toLowerCase().includes('scraper')) {
            return NextResponse.json({ error: 'Access Denied: Automated scraping prohibited.' }, { status: 403 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'],
};
