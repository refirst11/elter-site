'use client'

import { Tabs, Tab } from 'components/Tabs'
import { TocBot } from 'components/TocBot'
import { SearchBox } from 'components/SearchBox'
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'

const components = {
  Tabs,
  Tab,
  TocBot
}

export function PostContent({ content }: { content: MDXRemoteSerializeResult }) {
  return <MDXRemote {...content} components={components} />
}
