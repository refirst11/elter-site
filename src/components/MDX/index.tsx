'use client'

import { Tabs, Tab } from 'components/Tabs'
import { TocBot } from 'components/TocBot'
import Animation from 'components/Firemotion/Animation'
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'

const components = {
  Tabs,
  Tab,
  TocBot,
  Animation
}

export function PostContent({ content }: { content: MDXRemoteSerializeResult }) {
  return <MDXRemote {...content} components={components} />
}
