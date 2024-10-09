'use client'

import React, { useEffect, useState } from 'react'
import { css } from './style'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PostsData from 'types/PostsData'

export const NextPage = () => {
  const pathname = usePathname()
  const [prevPost, setPrevPost] = useState<PostsData | null>(null)
  const [nextPost, setNextPost] = useState<PostsData | null>(null)
  const [firstPost, setFirstPost] = useState<PostsData | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/getAllPosts')
      const allPosts: PostsData[] = await response.json()

      const currentIndex = allPosts.findIndex((post) => {
        const postPath = `/${post.category}${post.slug}`
        return postPath === pathname
      })

      if (allPosts.length > 0) {
        setFirstPost(allPosts[0])
      }

      if (currentIndex > 0) {
        setPrevPost(allPosts[currentIndex - 1])
      } else {
        setPrevPost(null)
      }

      if (currentIndex >= 0 && currentIndex < allPosts.length - 1) {
        setNextPost(allPosts[currentIndex + 1])
      } else if (currentIndex === allPosts.length - 1) {
        setNextPost(allPosts[0])
      } else {
        setNextPost(null)
      }
    }

    fetchPosts()
  }, [pathname])

  const getPostLink = (post: PostsData) => {
    return `/${post.category}${post.slug}`
  }

  return (
    <div className={css.container}>
      {prevPost && (
        <Link href={getPostLink(prevPost)} className={css.prev}>
          <span className={css.desc}>Previous page</span>
          <span className={css.title}>{prevPost.slug}</span>
        </Link>
      )}
      {nextPost && (
        <Link href={getPostLink(nextPost)} className={css.next}>
          <span className={css.desc}>{nextPost === firstPost ? 'First page' : 'Next page'}</span>
          <span className={css.title}>{nextPost.slug}</span>
        </Link>
      )}
    </div>
  )
}
