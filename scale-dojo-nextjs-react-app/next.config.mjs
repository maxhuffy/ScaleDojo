/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/main',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
