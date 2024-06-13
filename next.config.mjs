import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

const withMDXConfig = withMDX()

export default withMDXConfig(nextConfig)
