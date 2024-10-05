'use client'

import { useState, useEffect, Fragment } from 'react'
import cssx, { min_md, union } from 'typedcssx'
import Link from 'next/link'
import type PostsData from 'types/PostsData'
import { usePathname, useRouter } from 'next/navigation'
import { IoMdArrowDropright } from 'react-icons/io'
import { handleLinkClick } from 'lib/handleLinkClick'
import { headings } from 'lib/headings'
import { SearchBox } from 'components/SearchBox'
import { useAtom } from 'jotai'
import { menuAtom } from 'lib/jotai'
import { HiOutlineExternalLink } from 'react-icons/hi'

type MenuProps = {
  docs: PostsData[]
  apiData: PostsData[]
  inherData: PostsData[]
  animaData: PostsData[]
}

const MenuList = ({ docs, apiData, inherData, animaData }: MenuProps) => {
  const discuss = process.env.NEXT_PUBLIC_DISCUSS_URL || ''
  const pathname = usePathname()
  const [open, setOpen] = useAtom(menuAtom)
  const [isListVisible, setIsListVisible] = useState(true)
  const [api, setAPI] = useState(true)
  const [cssx, setCSSX] = useState(true)
  const [inher, setInher] = useState(true)
  const [hook, setHook] = useState(true)
  const [activeHeading, setActiveHeading] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll('h2, h3')
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

  return (
    <>
      <div className={css.Line}>
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
      <div className={css.menu} aria-hidden={!open}>
        <ul className={css.menu_list}>
          <SearchBox classBox={css.box} />
          <li>
            <Link className={union(css.active, css.link)} href="/" onClick={() => setOpen(false)} aria-current={'/' === pathname ? 'page' : 'false'}>
              Home
            </Link>
          </li>
          <li>
            <button className={`${css.docs} ${isListVisible ? css.activeDocs : ''}`} onClick={() => setIsListVisible(!isListVisible)}>
              Documentation
              <IoMdArrowDropright style={{ rotate: isListVisible ? '90deg' : '0deg' }} />
            </button>
          </li>

          {!isListVisible && (
            <li>
              <a className={union(css.hover, css.link)} href={discuss} target="_blank">
                Discussions <HiOutlineExternalLink style={{ position: 'relative', top: 2, right: 3 }} />
              </a>
            </li>
          )}
          <ul className={`${css.documentItems} ${isListVisible ? css.visible : ''}`}>
            {docs?.map(({ slug, title }, postIndex) => (
              <Fragment key={postIndex}>
                <li key={slug}>
                  <Link className={union(css.active, css.link)} href={`/${slug}`} onClick={() => setOpen(false)} aria-current={'/' + slug === pathname ? 'page' : 'false'}>
                    {title}
                  </Link>
                </li>
                {pathname === '/' + slug && (
                  <ul className={css.headingItems}>
                    {headings[postIndex]?.heading.map((heading, headingIndex) => (
                      <li key={`${slug}-heading-${headingIndex}`}>
                        <Link
                          className={union(css.active, css.link)}
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
              </Fragment>
            ))}
            <li>
              <button className={`${css.docs} ${api ? css.activeDocs : ''}`} onClick={() => setAPI(!api)}>
                API
                <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
              </button>
            </li>
            {api && (
              <ul className={`${css.documentItems} ${api ? css.visible : ''}`}>
                <li className={`${css.docs} ${cssx ? css.activeDocs : ''}`} onClick={() => setCSSX(!cssx)}>
                  cssx <IoMdArrowDropright style={{ rotate: cssx ? '90deg' : '0deg' }} />
                </li>
                {cssx && (
                  <ul className={`${css.documentItems} ${cssx ? css.visible : ''}`}>
                    {apiData?.map(({ slug, title }) => (
                      <li key={slug}>
                        <Link
                          href={`/core-api/${slug}`}
                          className={union(css.active, css.link)}
                          onClick={() => setOpen(false)}
                          aria-current={'/core-api/' + slug === pathname ? 'page' : 'false'}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            )}
            <li>
              <button className={`${css.docs} ${inher ? css.activeDocs : ''}`} onClick={() => setInher(!inher)}>
                inheritance
                <IoMdArrowDropright style={{ rotate: inher ? '90deg' : '0deg' }} />
              </button>
            </li>
            {inher && (
              <ul className={`${css.documentItems} ${inher ? css.visible : ''}`}>
                {inherData?.map(({ slug, title }) => (
                  <li key={slug}>
                    <Link
                      href={`/inheritance/${slug}`}
                      className={union(css.active, css.link)}
                      onClick={() => setOpen(false)}
                      aria-current={'/inheritance/' + slug === pathname ? 'page' : 'false'}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <li>
              <button className={`${css.docs} ${hook ? css.activeDocs : ''}`} onClick={() => setHook(!hook)}>
                Animation
                <IoMdArrowDropright style={{ rotate: hook ? '90deg' : '0deg' }} />
              </button>
            </li>
            {hook && (
              <ul className={`${css.documentItems} ${hook ? css.visible : ''}`}>
                {animaData.map(({ slug, title }) => (
                  <li key={slug}>
                    <Link
                      href={`/animation/${title}`}
                      className={union(css.active, css.link)}
                      onClick={() => setOpen(false)}
                      aria-current={'/animation/firemotion' === pathname ? 'page' : 'false'}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </ul>
      </div>
    </>
  )
}

export default MenuList

const css = cssx.create({
  box: {
    position: 'relative',
    top: -8,
    transform: 'translate(-20px)',
    width: '100%'
  },
  Line: {
    zIndex: '4',
    position: 'fixed',
    top: 11,
    right: 16,
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '8px',
    '&:active': {
      background: 'var(--color-border)'
    },
    '& button': {
      zIndex: '4',
      position: 'relative',
      padding: '30px 12px 6px',
      border: 'none',
      outline: 'none',
      transitionDuration: '0.5s'
    },
    '& span': {
      position: 'relative',
      display: 'block',
      width: 18,
      height: 2,
      background: 'var(--color-text)',
      borderRadius: '8px',
      transformOrigin: 'center'
    },
    '& span:nth-of-type(1)': {
      bottom: 16
    },
    '& span:nth-of-type(2)': {
      bottom: 12
    },
    '& span:nth-of-type(3)': {
      bottom: 8
    },

    '& [aria-expanded="true"] span:nth-of-type(1)': {
      transition: 'transform 0.25s, translate 0.25s 0.25s, rotate 0.25s 0.25s',
      transform: 'translateY(6px)',
      translate: '4px 1.6px',
      rotate: '45deg'
    },
    '& [aria-expanded="true"] span:nth-of-type(2)': {
      opacity: 0,
      transitionDuration: '0.25s'
    },
    '& [aria-expanded="true"] span:nth-of-type(3)': {
      transition: 'transform 0.25s, translate 0.25s 0.25s, rotate 0.25s 0.25s',
      transform: 'translateY(-6px)',
      translate: '4px -1.6px',
      rotate: '-45deg'
    },
    '& [aria-expanded="false"] span:nth-of-type(1)': {
      transition: 'transform 0.25s 0.25s, translate 0.25s, rotate 0.25s',
      transform: 'translateY(0)',
      translate: '0 0',
      rotate: '0deg'
    },
    '& [aria-expanded="false"] span:nth-of-type(2)': {
      transition: 'opacity 0.35s 0.25s',
      opacity: 1
    },
    '& [aria-expanded="false"] span:nth-of-type(3)': {
      transition: 'transform 0.25s 0.25s, translate 0.25s, rotate 0.25s',
      transform: 'translateY(0)',
      translate: '0 0',
      rotate: '0deg'
    },
    [min_md]: {
      display: 'none'
    }
  },
  menu: {
    display: 'block',
    '&[aria-hidden="true"] ul': {
      transform: 'translateY(-100%)'
    },

    '&[aria-hidden="false"] ul': {
      transform: 'translateY(0%)'
    },
    [min_md]: {
      display: 'none'
    }
  },

  menu_list: {
    zIndex: '1',
    position: 'fixed',
    top: 64,
    left: 0,
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
    height: 'calc(100% - 64px)',
    overflowY: 'auto',
    margin: 'auto',
    padding: '20px',
    background: 'var(--color-bg)',
    borderBottom: 'solid 1px var(--color-border)',
    transition: 'transform 0.5s',
    '&::after': {
      content: '""',
      display: 'block',
      height: '52px'
    },
    '& li': {
      listStyleType: 'none'
    }
  },

  link: {
    textDecoration: 'none',
    color: '#959595',
    display: 'block',
    width: '100%',
    height: 32,
    padding: '6px 8px',
    borderRadius: '4px'
  },

  docs: {
    fontSize: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 8px',
    height: 32,
    width: '100%',
    borderRadius: '4px'
  },

  activeDocs: {
    background: 'var(--color-card)',
    color: 'var(--color-sub)'
  },

  documentItems: {
    borderLeft: 'solid 1px var(--color-border)',
    marginLeft: 12,
    paddingLeft: 12,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    visibility: 'hidden',
    transition: 'all 0.2s'
  },

  headingItems: {
    borderLeft: 'solid 1px var(--color-border)',
    marginLeft: 12,
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    transition: 'all 0.2s'
  },

  visible: {
    opacity: 1,
    visibility: 'visible'
  },

  hover: {
    hover: {
      color: 'var(--color-link)',
      transition: 'all 0.2s'
    }
  },

  active: {
    "&[aria-current='false']:hover": {
      background: 'var(--color-card)',
      color: 'var(--color-sub)',
      transition: 'color 0.2s, background 0.2s'
    },
    "&[aria-current='page']": {
      fontWeight: 600,
      color: 'var(--color-link)',
      background: 'var(--color-list)'
    },
    "&[aria-current='false']": {
      background: 'transparent'
    }
  }
})
