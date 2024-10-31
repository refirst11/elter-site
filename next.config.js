const { configCSSModule } = require('next-plugin-elter')

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return configCSSModule(config)
  },
  transpilePackages: ['next-mdx-remote'],
  reactStrictMode: false
}

module.exports = nextConfig
