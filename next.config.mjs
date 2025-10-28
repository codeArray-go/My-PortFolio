/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-c922ffc3b1574e6f80ae0729d426fdea.r2.dev',
            },
        ]
    }
};

export default nextConfig;
