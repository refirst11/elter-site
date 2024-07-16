import { MDXRemoteSerializeResult } from 'next-mdx-remote'
export type ReturnData = {
  meta: {
    title: string
    subtitle: string
    date: string
  }
  content: MDXRemoteSerializeResult
}

export type PostData = {
  title: string
  subtitle: string
  date: string
}
