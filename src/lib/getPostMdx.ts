'use server'

import fs from 'fs'
import path from 'path'
import type { ReturnData, PostData } from 'types/PostData'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Tabs, Tab } from 'components/Tabs'
import { TocBot } from 'components/TocBot'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { createCssVariablesTheme } from 'shiki'

const Element = {
  Tabs,
  Tab,
  TocBot
}

const myTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true
})

async function getPostMdx(slug: string): Promise<ReturnData> {
  const folder = path.join(process.cwd(), '/src/documentation')
  const fullPath = path.join(folder, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')

  const { frontmatter, content } = await compileMDX<PostData>({
    components: Element,
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
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
    }
  })
  return { meta: { ...frontmatter }, content: content }
}

export default getPostMdx

export const getPageContent = async (slug: string) => {
  const postData = await getPostMdx(slug)
  return postData
}
