/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-3240409dbeb84a90898c2fe6a2e0c8ec.r2.dev',
            },
        ]
    }
};

export default nextConfig;
