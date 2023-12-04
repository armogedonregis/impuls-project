/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en', 'ru'],
    defaultLocale: 'es',
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
        defaultLocale: 'ru',
        http: true
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