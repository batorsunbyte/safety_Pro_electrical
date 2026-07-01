/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
    },
    trailingSlash: true,
}

module.exports = nextConfig
