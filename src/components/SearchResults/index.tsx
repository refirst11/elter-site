import { extractHeadingsAndParagraphs } from 'lib/extractHeadingsAndParagraphs'
import Link from 'next/link'
import { css } from './style'
import { useEffect, useState, useMemo, useCallback } from 'react'
import type PostsData from 'types/PostsData'
import PostContent, { HeadingWithParagraphs } from 'types/PostContent'
import { useAtom } from 'jotai'
import { menuAtom } from 'lib/jotai'
import { usePathname } from 'next/navigation'

type KeywordProps = {
  keyword: string
  onClick: React.MouseEventHandler<HTMLElement>
}

export const SearchResults = ({ keyword, onClick }: KeywordProps) => {
  const pathname = usePathname()
  const [, setMenu] = useAtom(menuAtom)
  const [posts, setPosts] = useState<PostsData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [cachedContents, setCachedContents] = useState<{ [slug: string]: PostContent }>({})

  useEffect(() => {
    if (Object.keys(cachedContents).length > 0) {
      setIsLoading(false)
      return
    }
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/getAllPosts')
        const postsData: PostsData[] = await response.json()
        setPosts(postsData)

        const cachedData: { [slug: string]: PostContent } = {}
        await Promise.all(
          postsData.map(async (post) => {
            const slug = post.slug
            const contentResponse = await fetch(`/api/getPostMdx?slug=${slug}`)
            if (!contentResponse.ok) {
              throw new Error(`Failed to fetch post content for ${slug}`)
            }
            const { meta, content } = await contentResponse.json()
            const matchedSections = extractHeadingsAndParagraphs(content)
            cachedData[slug] = { meta, content, matchedSections }
          })
        )

        setCachedContents(cachedData)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [cachedContents, pathname])

  const { filteredPosts, matchedSectionsMap } = useMemo(() => {
    if (!keyword) return { filteredPosts: [], matchedSectionsMap: new Map() }

    const filteredPostsArray: PostsData[] = []
    const matchedSectionsMap = new Map()

    posts.forEach((post) => {
      const { slug } = post
      const matchedSections = cachedContents[slug]?.matchedSections || []
      const filteredSections = matchedSections.filter(({ heading }) => heading.toLowerCase().includes(keyword.toLowerCase()))

      if (filteredSections.length > 0) {
        filteredPostsArray.push(post)
        matchedSectionsMap.set(slug, filteredSections)
      }
    })

    return { filteredPosts: filteredPostsArray, matchedSectionsMap }
  }, [cachedContents, keyword, posts])

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
      <span key={i} className={part.toLowerCase() === keyword.toLowerCase() ? css.highlight : undefined}>
        {part}
      </span>
    ))
  }, [])

  if (isLoading) {
    return (
      <ul className={css.list}>
        <p className={css.no_result}>Loading...</p>
      </ul>
    )
  }

  return (
    <ul onClick={onClick} className={css.list}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(({ slug, category }, index) => {
          const matchedSections = matchedSectionsMap.get(slug) as HeadingWithParagraphs[]

          return (
            <li key={index}>
              {matchedSections.map(({ heading, paragraphs, id }, index) => (
                <Link
                  key={index}
                  className={css.link}
                  href={`/${category}${slug}`}
                  onClick={() => {
                    setTimeout(() => {
                      scrollToHeading(id)
                    }, 120)
                    setMenu(false)
                  }}>
                  <div className={css.box}>
                    <div className={css.heading3}>{highlightText(heading, keyword)}</div>

                    {paragraphs.map((paragraph, idx) => (
                      <p className={css.desc} key={idx}>
                        {highlightText(paragraph, keyword)} {/* ハイライト適用 */}
                      </p>
                    ))}
                  </div>
                </Link>
              ))}
            </li>
          )
        })
      ) : (
        <p className={css.no_result}>No results found.</p>
      )}
    </ul>
  )
}
