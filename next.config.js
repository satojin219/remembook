/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir:
      true |
      {
        optimizeFonts: true,
        enabled: true,
        silent: true,
      },
  },
}

module.exports = nextConfig
