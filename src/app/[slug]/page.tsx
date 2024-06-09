import getPostMdx from 'lib/getPostMdx'
import Params from 'types/Params'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'
import getSlugPath from 'lib/getSlugPath'
import { NextPage } from 'components/NextPage'

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { meta } = await getPageContent(params.slug)
  return generateSEOData({ title: meta.title, subtitle: meta.subtitle, date: meta.date })
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostMdx(slug)
  return { meta, content }
}

async function Page({ params }: Params) {
  const { content } = await getPageContent(params.slug)

  return (
    <main>
      {content}
      <NextPage />
    </main>
  )
}

export async function generateStaticParams() {
  const posts = await getSlugPath()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default Page
