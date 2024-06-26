'use client'

import { useState, useEffect } from 'react'
import { styles } from './style.css'
import Link from 'next/link'
import type PostsData from 'types/PostsData'
import { usePathname, useRouter } from 'next/navigation'
import { IoMdArrowDropright } from 'react-icons/io'
import { handleLinkClick } from 'lib/handleLinkClick'

type MenuProps = {
  posts: PostsData[]
}

const MenuList = ({ posts }: MenuProps) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isListVisible, setIsListVisible] = useState(false)
  const [activeHeading, setActiveHeading] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [open])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      let currentActiveHeading = ''

      headingElements.forEach((heading) => {
        const { top } = heading.getBoundingClientRect()
        if (top <= 150) {
          currentActiveHeading = heading.id
        }
      })

      setActiveHeading(currentActiveHeading)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headings = [
    {
      heading: [
        { id: 'zero-runtime-and-rsc', text: '# Zero Runtime and RSC' },
        { id: 'hard-type-and-hot-reload', text: '# Hard Type and Hot Reload' },
        { id: 'production-environment', text: '# Production environment' },
        { id: 'inspirations', text: '# Inspirations' },
        { id: 'whats-next', text: "# What'sNext" }
      ]
    },
    {
      heading: [
        { id: 'npm', text: '# NPM' },
        { id: 'build-setting', text: '# Build setting' }
      ]
    },
    {
      heading: [
        { id: 'style-create', text: '# Style create' },
        { id: 'compiled-create', text: '# Compiled create' },
        { id: 'style-global', text: '# Style global' },
        { id: 'compiled-global', text: '# Compiled global' },
        { id: 'style-set', text: '# Style set' },
        { id: 'compiled-set', text: '# Compiled set' },
        { id: 'style-root', text: '# Style root' },
        { id: 'compiled-root', text: '# Compiled root' }
      ]
    },
    {
      heading: [
        { id: 'input', text: '# Input' },
        { id: 'output', text: '# Output' }
      ]
    },
    {
      heading: [
        { id: 'types', text: '# Types' },
        { id: 'pseudo-hover-example', text: '# Pseudo hover example' },
        { id: 'compiled-hover', text: '# Compiled hover' },
        { id: 'pseudo-lang-example', text: '# Pseudo lang example' },
        { id: 'compiled-lang', text: '# Compiled lang' },
        { id: 'pseudo-not-example', text: '# Pseudo not example' },
        { id: 'compiled-not', text: '# Compiled not' },
        { id: 'pseudo-has-example', text: '# Pseudo has example' },
        { id: 'compiled-has', text: '# Compiled has' },
        { id: 'and-string-selector', text: '# And string Selector' },
        { id: 'compiled-and-string-selector', text: '# Compiled and string Selector' }
      ]
    }
  ]

  useEffect(() => {
    if (pathname !== '/') setIsListVisible(true)
  }, [pathname])

  return (
    <>
      <div className={styles.Line}>
        <button
          aria-expanded={open}
          onClick={() => {
            setOpen(!open)
          }}
          aria-label="Toggle mobile navigation menu"
          type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={styles.menu} aria-hidden={!open}>
        <ul className={styles.menu_list}>
          <li>
            <Link className={styles.active} href="/" onClick={() => setOpen(false)} aria-current={'/' === pathname ? 'page' : 'false'}>
              Home
            </Link>
          </li>
          <li className={`${styles.docs} ${isListVisible ? styles.activeDocs : ''}`} onClick={() => setIsListVisible(!isListVisible)}>
            Documentation
            <IoMdArrowDropright style={{ rotate: isListVisible ? '90deg' : '0deg' }} />
          </li>
          <ul className={`${styles.documentItems} ${isListVisible ? styles.visible : ''}`}>
            {posts?.map(({ slug, title }, postIndex) => (
              <>
                <li key={slug}>
                  <Link className={styles.active} href={`/${slug}`} onClick={() => setOpen(false)} aria-current={'/' + slug === pathname ? 'page' : 'false'}>
                    {title}
                  </Link>
                </li>
                {pathname === '/' + slug && (
                  <ul className={styles.headingItems}>
                    {headings[postIndex]?.heading.map((heading, headingIndex) => (
                      <li key={`${slug}-heading-${headingIndex}`}>
                        <Link
                          className={styles.active}
                          href={`/${slug}#${heading.id}`}
                          onClick={(e) => {
                            handleLinkClick(router, e, slug, heading.id)
                            setOpen(false)
                          }}
                          aria-current={activeHeading === heading.id ? 'page' : 'false'}>
                          {heading.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </ul>
      </div>
    </>
  )
}

export default MenuList
