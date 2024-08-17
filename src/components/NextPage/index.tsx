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
      const documentationPosts = await getAllPosts('documentation')
      const corePosts = await getAllPosts('coreapi')
      const helpPosts = await getAllPosts('helpers')
      const hooks = await getAllPosts('hooks')
      const allPosts = [
        ...documentationPosts.map((post) => ({ ...post, category: 'documentation' })),
        ...corePosts.map((post) => ({ ...post, category: 'coreapi' })),
        ...helpPosts.map((post) => ({ ...post, category: 'helpers' })),
        ...hooks.map((post) => ({ ...post, category: 'hooks' }))
      ]

      const currentIndex = allPosts.findIndex((post) => {
        let postPath = `/${post.slug}`
        if (post.category === 'coreapi') {
          postPath = `/core-api/${post.slug}`
        } else if (post.category === 'helpers') {
          postPath = `/helpers/${post.slug}`
        } else if (post.category === 'hooks') {
          postPath = `/hooks/${post.slug}`
        }
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
    if (post.category === 'coreapi') {
      return `/core-api/${post.slug}`
    } else if (post.category === 'helpers') {
      return `/helpers/${post.slug}`
    } else if (post.category === 'hooks') {
      return `/hooks/${post.slug}`
    }
    return `/${post.slug}`
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
