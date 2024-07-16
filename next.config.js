/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      }
    }
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  transpilePackages: ['next-mdx-remote']
}

module.exports = nextConfig
