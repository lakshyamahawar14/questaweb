/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/paper',
        destination: '/',
        permanent: true,
      },
      {
        source: '/paperhindi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/create',
        destination: '/',
        permanent: true,
      },
      {
        source: '/download',
        destination: '/',
        permanent: true,
      }
    ]
  },
}
// module.exports = nextConfig
