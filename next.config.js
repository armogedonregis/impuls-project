/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
   })

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    unoptimized: false,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'impulsplus.s3.eu-south-2.amazonaws.com',
        },
        {
            protocol: 'https',
            hostname: 'scontent-lhr8-2.cdninstagram.com',
        },
        {
            protocol: 'https',
            hostname: 'scontent-lhr6-1.cdninstagram.com',
        },
        {
            protocol: 'https',
            hostname: 'scontent-lhr8-1.cdninstagram.com',
        },
        {
            protocol: 'https',
            hostname: 'scontent-lhr6-2.cdninstagram.com',
        },
        // {
        //     protocol: 'https',
        //     hostname: 'scontent-lhr8-1.cdninstagram.com',
        // },
        // {
        //     protocol: 'https',
        //     hostname: 'scontent-lhr8-1.cdninstagram.com',
        // },
        // {
        //     protocol: 'https',
        //     hostname: 'scontent-lhr8-1.cdninstagram.com',
        // },
        // {
        //     protocol: 'https',
        //     hostname: 'scontent-lhr8-1.cdninstagram.com',
        // },
        // {
        //     protocol: 'https',
        //     hostname: 'scontent-lhr8-1.cdninstagram.com',
        // }
    ],
    formats: ['image/avif', 'image/webp']
},
}

module.exports = withBundleAnalyzer(nextConfig)