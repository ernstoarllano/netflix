/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    tmdb: '52685fafd37b2e0ab1d71e3d04145bcd'
  },
  images: {
    domains: [
      'image.tmdb.org'
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
