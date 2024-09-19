import getPostMdx from 'lib/getPostMdx'
import Params from 'types/Params'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'
import getSlugPath from 'lib/getSlugPath'
import { NextPage } from 'components/NextPage'
import { Documentation } from 'components/Documentation'
import { PostContent } from 'components/MDX'

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { meta } = await getPostMdx(params.slug, 'helper')
  return generateSEOData({ title: meta.title, subtitle: meta.subtitle, date: meta.date })
}

export default async function Page({ params }: Params) {
  const { content } = await getPostMdx(params.slug, 'helper')

  return (
    <main>
      <Documentation />
      <PostContent content={content} />
      <NextPage />
    </main>
  )
}

export async function generateStaticParams() {
  const posts = await getSlugPath('helper')

  return posts.map((post) => ({
    slug: post.slug
  }))
}
