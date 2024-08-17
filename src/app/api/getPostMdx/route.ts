import { NextResponse } from 'next/server'
import getPostMdx from 'lib/getPostMdx'

const categories = ['documentation', 'coreapi', 'helpers', 'hooks']

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 })
  }

  try {
    const results = await Promise.all(
      categories.map(async (category) => {
        try {
          const { meta, content } = await getPostMdx(slug, category)
          return { category, meta, content }
        } catch (error) {
          console.error(`Error fetching ${category} for slug ${slug}:`, error)
          return { category, error: `Failed to fetch ${category}` }
        }
      })
    )

    const successfulResults = results.filter((result) => !result.error)

    if (successfulResults.length === 0) {
      return NextResponse.json({ error: 'Content not found in any category' }, { status: 404 })
    }

    const { meta, content } = successfulResults[0]

    return NextResponse.json({ meta, content })
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
