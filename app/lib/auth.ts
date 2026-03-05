import { SignJWT, jwtVerify } from 'jose';

const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-for-dev-only-39x02931a';
const secretKey = new TextEncoder().encode(jwtSecret);

export async function signToken(payload: any) {
    // Issue Time-limited JWT access token (24 hours)
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secretKey);
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, secretKey);
        return payload;
    } catch (error) {
        return null;
    }
}
