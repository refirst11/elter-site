'use client'

import React, { useEffect, useState } from 'react'
import { styles } from './style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import getAllPosts from 'lib/getAllPosts'
import PostsData from 'types/PostsData'

export const NextPage = () => {
  const pathname = usePathname()
  const [prevPost, setPrevPost] = useState<PostsData | null>(null)
  const [nextPost, setNextPost] = useState<PostsData | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts()
      const currentIndex = posts.findIndex((post) => `/${post.slug}` === pathname)

      if (currentIndex > 0) {
        setPrevPost(posts[currentIndex - 1])
      } else {
        setPrevPost(null)
      }
      if (currentIndex < posts.length - 1) {
        setNextPost(posts[currentIndex + 1])
      } else {
        setNextPost(null)
      }
    }

    fetchPosts()
  }, [pathname])

  return (
    <div className={styles.container}>
      {prevPost && (
        <Link href={`/${prevPost.slug}`} className={styles.prev}>
          {`< ${prevPost.title}`}
        </Link>
      )}
      {nextPost && (
        <Link href={`/${nextPost.slug}`} className={styles.next}>
          {`${nextPost.title} >`}
        </Link>
      )}
    </div>
  )
}
