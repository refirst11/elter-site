const { TypedCSSXNextPlugin, configCSSModule } = require('typedcssx-next-plugin')

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.plugins.push(new TypedCSSXNextPlugin())
    return configCSSModule(config)
  },
  transpilePackages: ['next-mdx-remote']
}

module.exports = nextConfig
