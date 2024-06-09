import withMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import { getHighlighter } from 'shiki'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

const withMDXConfig = withMDX({
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-light',
          keepBacground: true,
          getHighlighter
        }
      ]
    ]
  }
})

export default withMDXConfig(nextConfig)
