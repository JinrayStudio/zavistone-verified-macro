/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 배포 시 보안 및 스크래핑 방지 차원에서 X-Frame-Options 헤더를 삽입
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          }
        ],
      },
    ];
  },
};

module.exports = nextConfig;
