const withOffline = require('next-offline')

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}

module.exports = withOffline(nextConfig)
