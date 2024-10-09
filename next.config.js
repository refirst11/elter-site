const { configCSSModule } = require('typedcssx-next-plugin')

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return configCSSModule(config)
  },
  transpilePackages: ['next-mdx-remote']
}

module.exports = nextConfig
