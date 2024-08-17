import ReactDOMServer from 'react-dom/server'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { HeadingWithParagraphs } from 'types/PostContent'
import { Tabs, Tab } from 'components/Tabs'
import { TocBot } from 'components/TocBot'

export const extractHeadingsAndParagraphs = (content: MDXRemoteSerializeResult): HeadingWithParagraphs[] => {
  const components = {
    Tabs,
    Tab,
    TocBot
  }

  const Component = <MDXRemote {...content} components={components} />
  const htmlContent = ReactDOMServer.renderToString(Component)
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3'))

  const result: HeadingWithParagraphs[] = []

  const getParagraphs = (startNode: Node | null, limit: number): string[] => {
    const paragraphs: string[] = []
    let currentNode: Node | null = startNode

    while (currentNode && paragraphs.length < limit) {
      if (currentNode.nodeType === Node.ELEMENT_NODE) {
        const element = currentNode as HTMLElement
        if (element.tagName.toLowerCase() === 'p') {
          paragraphs.push(element.textContent?.trim() || '')
        } else if (/h[1-3]/i.test(element.tagName)) {
          break
        }
      }
      currentNode = currentNode.nextSibling
    }

    return paragraphs
  }

  headings.forEach((heading) => {
    const headingText = heading.textContent?.trim() || ''
    const headingId = heading.id
    const paragraphs = getParagraphs(heading.nextSibling, 1)

    if (headingText && paragraphs.length > 0) {
      result.push({ heading: headingText, paragraphs, id: headingId })
    }
  })

  return result
}
