import ReactDOMServer from 'react-dom/server'
import Link from 'next/link'
import styles from './styles.module.css'
import { JSXElementConstructor, ReactElement, useEffect, useState } from 'react'
import getAllPosts from 'lib/getAllPosts'
import { getPageContent } from 'lib/getPostMdx'
import PostsData from 'types/PostsData'
import React from 'react'

type KeywordProps = {
  keyword: string
  onClick: React.MouseEventHandler<HTMLElement>
}

interface HeadingWithParagraphs {
  heading: string
  paragraphs: string[]
  id: string
}

interface PostContent {
  meta: any
  content: ReactElement<string, string | JSXElementConstructor<string>>
  matchedSections: HeadingWithParagraphs[]
}

export const extractHeadingsAndParagraphs = (content: ReactElement<string, string | JSXElementConstructor<string>>): HeadingWithParagraphs[] => {
  const htmlContent = ReactDOMServer.renderToString(content)
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const headingsH1 = doc.querySelectorAll('h1')
  const headingsH2 = doc.querySelectorAll('h2')
  const headingsH3 = doc.querySelectorAll('h3')

  const headings = [...headingsH1, ...headingsH2, ...headingsH3]
  const result: HeadingWithParagraphs[] = []

  const getParagraphs = (startNode: Node | null, limit: number): string[] => {
    const paragraphs: string[] = []
    let currentNode: Node | null = startNode
    let count = 0

    while (currentNode && count < limit) {
      if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.nodeName.toLowerCase() === 'p') {
        const paragraph = currentNode.textContent?.trim() || ''
        paragraphs.push(paragraph)
        count++
      } else if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.nodeName.toLowerCase() === 'h3') {
        break
      }

      currentNode = currentNode.nextSibling
    }

    return paragraphs
  }

  const generateId = (text: string) => text.toLowerCase().replace(/\s+/g, '-')

  headings.forEach((heading) => {
    const headingText = heading.textContent?.trim() || ''
    const headingId = generateId(headingText)
    const afterParagraphs = getParagraphs(heading.nextSibling, 2)
    const paragraphs = [...afterParagraphs]

    if (headingText && paragraphs.length > 0) {
      result.push({ heading: headingText, paragraphs, id: headingId })
    }
  })

  return result
}

export const SearchResults = ({ keyword, onClick }: KeywordProps) => {
  const [posts, setPosts] = useState<PostsData[]>([])
  const [postContents, setPostContents] = useState<{ [slug: string]: PostContent }>({})

  useEffect(() => {
    const fetchPostsAndContents = async () => {
      const postsData = await getAllPosts()
      setPosts(postsData)

      const fetchContents = async (postsData: PostsData[]) => {
        const contents = await Promise.all(
          postsData.map(async ({ slug }) => {
            const { meta, content } = await getPageContent(slug)
            const matchedSections = extractHeadingsAndParagraphs(content)

            return { slug, meta, content, matchedSections }
          })
        )

        return contents
      }
      const contents = await fetchContents(postsData)

      const contentMap = contents.reduce(
        (acc, { slug, meta, content, matchedSections }) => {
          acc[slug] = { meta, content, matchedSections }
          return acc
        },
        {} as { [slug: string]: PostContent }
      )

      setPostContents(contentMap)
    }

    fetchPostsAndContents()
  }, [])

  const filteredPosts = posts.filter(({ title, slug }) => {
    const matchedSections = postContents[slug]?.matchedSections || []
    return (
      title.toLowerCase().includes(keyword.toLowerCase()) ||
      matchedSections.some(
        ({ heading, paragraphs }) =>
          heading.toLowerCase().includes(keyword.toLowerCase()) || paragraphs.some((paragraph) => paragraph.toLowerCase().includes(keyword.toLowerCase()))
      )
    )
  })

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

  return (
    <ul onClick={onClick} className={styles.list}>
      {filteredPosts.map(({ slug }) => {
        const matchedSections = postContents[slug]?.matchedSections || []
        const keywordRegex = new RegExp(`(${keyword})`, 'gi')

        return (
          <li key={slug}>
            {matchedSections.map(
              ({ heading, paragraphs, id }, index) =>
                (heading.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) || paragraphs.some((paragraph) => paragraph.toLowerCase().includes(keyword.toLowerCase()))) && (
                  <div key={index} className={styles.box}>
                    <Link
                      className={styles.link}
                      href={`/${slug}`}
                      onClick={() =>
                        setTimeout(() => {
                          scrollToHeading(id)
                        }, 80)
                      }>
                      <div className={styles.heading3} dangerouslySetInnerHTML={{ __html: heading.replace(keywordRegex, `<span class=${styles.highlight}>$1</span>`) }} />

                      {paragraphs.map((paragraph, idx) => (
                        <p className={styles.desc} key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(keywordRegex, `<span class=${styles.highlight}>$1</span>`) }} />
                      ))}
                    </Link>
                  </div>
                )
            )}
          </li>
        )
      })}
    </ul>
  )
}
