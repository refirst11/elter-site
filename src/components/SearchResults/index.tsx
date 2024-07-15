import { extractHeadingsAndParagraphs } from 'lib/extractHeadingsAndParagraphs'
import Link from 'next/link'
import { styles } from './style.css'
import { useEffect, useState, useMemo, useCallback } from 'react'
import getAllPosts from 'lib/getAllPosts'
import getPostMdx from 'lib/getPostMdx'
import type PostsData from 'types/PostsData'
import PostContent, { HeadingWithParagraphs } from 'types/PostContent'

type KeywordProps = {
  keyword: string
  onClick: React.MouseEventHandler<HTMLElement>
}

export const SearchResults = ({ keyword, onClick }: KeywordProps) => {
  const [posts, setPosts] = useState<PostsData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [postContents, setPostContents] = useState<{ [slug: string]: PostContent }>({})

  useEffect(() => {
    const fetchPostsAndContents = async () => {
      setIsLoading(true)
      const postsData = await getAllPosts()
      setPosts(postsData)
      setIsLoading(false)
    }

    fetchPostsAndContents()
  }, [])

  useEffect(() => {
    const fetchPostContent = async (slug: string) => {
      if (!postContents[slug]) {
        const { meta, content } = await getPostMdx(slug)
        const matchedSections = extractHeadingsAndParagraphs(content)
        setPostContents((prev) => ({ ...prev, [slug]: { meta, content, matchedSections } }))
      }
    }

    if (keyword) {
      posts.forEach(({ slug }) => fetchPostContent(slug))
    }
  }, [keyword, posts, postContents])

  const { filteredPosts, matchedSectionsMap } = useMemo(() => {
    if (!keyword) return { filteredPosts: [], matchedSectionsMap: new Map() }
    const filteredPostsArray: PostsData[] = []
    const matchedSectionsMap = new Map()

    posts.forEach((post) => {
      const { slug } = post
      const matchedSections = postContents[slug]?.matchedSections || []
      const filteredSections = matchedSections.filter(
        ({ heading, paragraphs }) =>
          heading.toLowerCase().includes(keyword.toLowerCase()) || paragraphs.some((paragraph) => paragraph.toLowerCase().includes(keyword.toLowerCase()))
      )

      if (filteredSections.length > 0) {
        filteredPostsArray.push(post)
        matchedSectionsMap.set(slug, filteredSections)
      }
    })

    return { filteredPosts: filteredPostsArray, matchedSectionsMap }
  }, [keyword, posts, postContents])

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - 76

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  const highlightText = useCallback((text: string, keyword: string) => {
    if (!keyword.trim()) return text
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'))
    return parts.map((part, i) => (
      <span key={i} className={part.toLowerCase() === keyword.toLowerCase() ? styles.highlight : undefined}>
        {part}
      </span>
    ))
  }, [])

  if (isLoading) {
    return (
      <ul className={styles.list}>
        <p className={styles.no_result}>Loading...</p>
      </ul>
    )
  }

  return (
    <ul onClick={onClick} className={styles.list}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(({ slug }, index) => {
          const matchedSections = matchedSectionsMap.get(slug) as HeadingWithParagraphs[]

          return (
            <li key={index}>
              {matchedSections.map(
                ({ heading, paragraphs, id }, index) =>
                  (heading.toLowerCase().includes(keyword.toLowerCase()) || paragraphs.some((paragraph) => paragraph.toLowerCase().includes(keyword.toLowerCase()))) && (
                    <Link
                      key={index}
                      className={styles.link}
                      href={`/${slug}`}
                      onClick={() =>
                        setTimeout(() => {
                          scrollToHeading(id)
                        }, 120)
                      }>
                      <div className={styles.box}>
                        <div className={styles.heading3}>{highlightText(heading, keyword)}</div>

                        {paragraphs.map((paragraph, idx) => (
                          <p className={styles.desc} key={idx}>
                            {highlightText(paragraph, keyword)}
                          </p>
                        ))}
                      </div>
                    </Link>
                  )
              )}
            </li>
          )
        })
      ) : (
        <p className={styles.no_result}>No results found.</p>
      )}
    </ul>
  )
}
