import { NextResponse } from 'next/server'
import getAllPosts from 'lib/getAllPosts'

const categories = ['documentation', 'coreapi', 'helpers', 'hooks']

export async function GET() {
  const allPosts = await Promise.all(categories.map((category) => getAllPosts(category)))
  const flattenedPosts = allPosts.flat()

  return NextResponse.json(flattenedPosts)
}
