'use server'

import fs from 'fs'
import path from 'path'
import type { ReturnData, PostData } from 'types/PostData'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { createCssVariablesTheme } from 'shiki'
import remarkGfm from 'remark-gfm'

async function getPostMdx(slug: string): Promise<ReturnData> {
  const folder = path.join(process.cwd(), '/src/documentation')
  const fullPath = path.join(folder, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')

  const myTheme = createCssVariablesTheme({
    name: 'css-variables',
    variablePrefix: '--shiki-',
    variableDefaults: {},
    fontStyle: true
  })

  const mdxSource = await serialize<PostData>(file, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: myTheme,
            keepBackground: false,
            onVisitHighlightedLine(node: { properties: { className: string[] } }) {
              node.properties.className.push('highlighted')
            }
          }
        ]
      ]
    }
  })

  return {
    meta: { ...(mdxSource.frontmatter as PostData) },
    content: mdxSource
  }
}

export default getPostMdx
