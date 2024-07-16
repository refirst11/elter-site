import { MDXRemoteSerializeResult } from 'next-mdx-remote'

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
  content: MDXRemoteSerializeResult
  matchedSections: HeadingWithParagraphs[]
}

export default PostContent
