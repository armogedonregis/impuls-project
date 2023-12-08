/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ru'],
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'es'
      },
      {
        domain: 'example.com/en',
        defaultLocale: 'en'
      },
      {
        domain: 'example.com/ru',
        defaultLocale: 'ru'
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'impulsplus.s3.eu-south-2.amazonaws.com',
        },
    ],
},
}

module.exports = nextConfig