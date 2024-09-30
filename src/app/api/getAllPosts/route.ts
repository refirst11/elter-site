import { NextResponse } from 'next/server'
import getAllPosts from 'lib/getAllPosts'
import { categories } from 'lib/categories'

export async function GET() {
  const allPosts = await Promise.all(categories.map((category) => getAllPosts(category)))
  const flattenedPosts = allPosts.flat()

  return NextResponse.json(flattenedPosts)
}
