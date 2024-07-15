import { extractHeadingsAndParagraphs } from 'lib/extractHeadingsAndParagraphs'
import Link from 'next/link'
import { styles } from './style.css'
import { useEffect, useState, useMemo, useCallback } from 'react'
import getAllPosts from 'lib/getAllPosts'
import getPostMdx from 'lib/getPostMdx'
import type PostsData from 'types/PostsData'
import PostContent, { HeadingWithParagraphs } from 'types/PostContent'
import { debounce } from 'lodash'

type KeywordProps = {
  keyword: string
  onClick: React.MouseEventHandler<HTMLElement>
}

export const SearchResults = ({ keyword, onClick }: KeywordProps) => {
  const [posts, setPosts] = useState<PostsData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [postContents, setPostContents] = useState<{ [slug: string]: PostContent }>({})
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword)

  useEffect(() => {
    const handler = debounce(() => setDebouncedKeyword(keyword), 300)
    handler()
    return () => {
      handler.cancel()
    }
  }, [keyword])

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

    if (debouncedKeyword) {
      posts.forEach(({ slug }) => fetchPostContent(slug))
    }
  }, [debouncedKeyword, posts, postContents])

  const { filteredPosts, matchedSectionsMap } = useMemo(() => {
    if (!debouncedKeyword) return { filteredPosts: [], matchedSectionsMap: new Map() }
    const filteredPostsArray: PostsData[] = []
    const matchedSectionsMap = new Map()

    posts.forEach((post) => {
      const { slug } = post
      const matchedSections = postContents[slug]?.matchedSections || []
      const filteredSections = matchedSections.filter(
        ({ heading, paragraphs }) =>
          heading.toLowerCase().includes(debouncedKeyword.toLowerCase()) || paragraphs.some((paragraph) => paragraph.toLowerCase().includes(debouncedKeyword.toLowerCase()))
      )

      if (filteredSections.length > 0) {
        filteredPostsArray.push(post)
        matchedSectionsMap.set(slug, filteredSections)
      }
    })

    return { filteredPosts: filteredPostsArray, matchedSectionsMap }
  }, [debouncedKeyword, posts, postContents])

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

  if (isLoading) {
    return (
      <ul className={styles.list}>
        <p className={styles.no_result}>Loading...</p>
      </ul>
    )
  }

  const highlightText = (text: string, keyword: string) => {
    if (!keyword.trim()) return text
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'))
    return parts.map((part, i) => (
      <span key={i} className={part.toLowerCase() === keyword.toLowerCase() ? styles.highlight : undefined}>
        {part}
      </span>
    ))
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
                  (heading.toLocaleLowerCase().includes(debouncedKeyword.toLocaleLowerCase()) ||
                    paragraphs.some((paragraph) => paragraph.toLowerCase().includes(debouncedKeyword.toLowerCase()))) && (
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
                        <div className={styles.heading3}>{highlightText(heading, debouncedKeyword)}</div>

                        {paragraphs.map((paragraph, idx) => (
                          <p className={styles.desc} key={idx}>
                            {highlightText(paragraph, debouncedKeyword)}
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
