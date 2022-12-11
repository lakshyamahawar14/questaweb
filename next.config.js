/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
