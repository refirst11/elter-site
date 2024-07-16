import { NextResponse } from 'next/server'
import getPostMdx from 'lib/getPostMdx'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 })
  }

  const { meta, content } = await getPostMdx(slug)
  return NextResponse.json({ meta, content })
}
