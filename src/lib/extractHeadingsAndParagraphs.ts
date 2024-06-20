import ReactDOMServer from 'react-dom/server'
import { JSXElementConstructor, ReactElement } from 'react'
import { HeadingWithParagraphs } from 'types/HeadingWithParagraphs'

export const extractHeadingsAndParagraphs = (content: ReactElement<string, string | JSXElementConstructor<string>>): HeadingWithParagraphs[] => {
  const htmlContent = ReactDOMServer.renderToString(content)
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const headingsH1 = doc.querySelectorAll('h1')
  const headingsH2 = doc.querySelectorAll('h2')
  const headingsH3 = doc.querySelectorAll('h3')

  const headings = [...headingsH1, ...headingsH2, ...headingsH3]
  const result: HeadingWithParagraphs[] = []

  const getParagraphs = (startNode: Node | null, limit: number): string[] => {
    const paragraphs: string[] = []
    let currentNode: Node | null = startNode
    let count = 0

    while (currentNode && count < limit) {
      if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.nodeName.toLowerCase() === 'p') {
        const paragraph = currentNode.textContent?.trim() || ''
        paragraphs.push(paragraph)
        count++
      } else if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.nodeName.toLowerCase() === 'h3') {
        break
      }

      currentNode = currentNode.nextSibling
    }

    return paragraphs
  }

  const generateId = (text: string) => text.toLowerCase().replace(/\s+/g, '-')

  headings.forEach((heading) => {
    const headingText = heading.textContent?.trim() || ''
    const headingId = generateId(headingText)
    const afterParagraphs = getParagraphs(heading.nextSibling, 2)
    const paragraphs = [...afterParagraphs]

    if (headingText && paragraphs.length > 0) {
      result.push({ heading: headingText, paragraphs, id: headingId })
    }
  })

  return result
}
