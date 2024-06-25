import { JSXElementConstructor, ReactElement } from 'react'

export interface HeadingWithParagraphs {
  heading: string
  paragraphs: string[]
  id: string
}

type PostContent = {
  meta: {
    title: string
    subtitle: string
    date: string
  }
  content: ReactElement<string, string | JSXElementConstructor<string>>
  matchedSections: HeadingWithParagraphs[]
}

export default PostContent
