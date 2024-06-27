import { extractHeadingsAndParagraphs } from 'lib/extractHeadingsAndParagraphs'
import Link from 'next/link'
import { styles } from './style.css'
import { useEffect, useState, useMemo } from 'react'
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

      const contents = await Promise.all(
        postsData.map(async ({ slug }) => {
          const { meta, content } = await getPostMdx(slug)
          const matchedSections = extractHeadingsAndParagraphs(content)

          return { slug, meta, content, matchedSections }
        })
      )

      const contentMap = contents.reduce(
        (acc, { slug, meta, content, matchedSections }) => {
          acc[slug] = { meta, content, matchedSections }
          return acc
        },
        {} as { [slug: string]: PostContent }
      )

      setPostContents(contentMap)
      setIsLoading(false)
    }

    fetchPostsAndContents()
  }, [])

  const { filteredPosts, matchedSectionsMap } = useMemo(() => {
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
  }, [posts, postContents, keyword])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - 100

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

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
        filteredPosts.map(({ slug }) => {
          const matchedSections = matchedSectionsMap.get(slug) as HeadingWithParagraphs[]
          const keywordRegex = new RegExp(`(${keyword})`, 'gi')

          return (
            <li key={slug}>
              {matchedSections.map(
                ({ heading, paragraphs, id }, index) =>
                  (heading.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
                    paragraphs.some((paragraph) => paragraph.toLowerCase().includes(keyword.toLowerCase()))) && (
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
                        <div className={styles.heading3} dangerouslySetInnerHTML={{ __html: heading.replace(keywordRegex, `<span class=${styles.highlight}>$1</span>`) }} />

                        {paragraphs.map((paragraph, idx) => (
                          <p className={styles.desc} key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(keywordRegex, `<span class=${styles.highlight}>$1</span>`) }} />
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
