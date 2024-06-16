import Link from 'next/link'
import getAllPosts from 'lib/getAllPosts'
import { useEffect, useState } from 'react'
import PostsData from 'types/PostsData'

type keywordProps = {
  keyword: string
}

async function fetchPosts() {
  const posts = await getAllPosts()
  return posts
}

export const SearchResults = ({ keyword }: keywordProps) => {
  const [posts, setPosts] = useState<PostsData[]>([])

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data)
    })
  }, [])

  const filteredPosts = posts.filter(({ title }: { title: string }) => title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))

  return (
    <ul>
      {filteredPosts.map(({ slug, title }: { slug: string; title: string }) => (
        <li key={slug}>
          <Link href={`/${slug}`}>
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}
