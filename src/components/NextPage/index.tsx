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
      const [documentationPosts, corePosts, helperPosts, hookPosts] = await Promise.all([
        getAllPosts('documentation'),
        getAllPosts('coreapi'),
        getAllPosts('helpers'),
        getAllPosts('hooks')
      ])

      const allPosts = [...documentationPosts, ...corePosts, ...helperPosts, ...hookPosts]

      const currentIndex = allPosts.findIndex((post) => {
        const postPath = `/${post.category}${post.slug}`
        return postPath === pathname
      })

      if (currentIndex > 0) {
        setPrevPost(allPosts[currentIndex - 1])
      } else {
        setPrevPost(null)
      }
      if (currentIndex >= 0 && currentIndex < allPosts.length - 1) {
        setNextPost(allPosts[currentIndex + 1])
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
    <div className={styles.container}>
      {prevPost && (
        <Link href={getPostLink(prevPost)} className={styles.prev}>
          <span className={styles.desc}>Previous page</span>
          <span>{prevPost.title}</span>
        </Link>
      )}
      {nextPost && (
        <Link href={getPostLink(nextPost)} className={styles.next}>
          <span className={styles.desc}>Next page</span>
          <span>{nextPost.title}</span>
        </Link>
      )}
    </div>
  )
}
