'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import cssx, { union, max_md } from 'typedcssx'
import PostsData from 'types/PostsData'
import { usePathname } from 'next/navigation'

type AccordionProps = {
  apiData: PostsData[]
  inherData: PostsData[]
  animaData: PostsData[]
}

const Accordion = ({ apiData, inherData, animaData }: AccordionProps) => {
  const [api, setAPI] = useState(true)
  const [cssx, setCSSX] = useState(true)
  const [inher, setInher] = useState(true)
  const [anima, setAnima] = useState(true)
  const pathname = usePathname()

  return (
    <>
      <button className={union(css.accordion, api && css.button_active)} onClick={() => setAPI(!api)}>
        API
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {api && (
        <ul className={css.list}>
          <li>
            <button className={union(cssx && css.button_active)} onClick={() => setCSSX(!cssx)}>
              cssx <IoMdArrowDropright className={css.arrow} style={{ rotate: cssx ? '90deg' : '0deg' }} />
            </button>
          </li>
          {cssx && (
            <ul className={css.list_style}>
              {apiData.map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/core-api/${slug}`} className={css.active} aria-current={'/core-api/' + slug === pathname ? 'page' : 'false'}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
      <button className={`${css.accordion} ${inher && css.button_active}`} onClick={() => setInher(!inher)}>
        Inheritance
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {inher && (
        <ul className={css.list}>
          {inherData.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/inheritance/${slug}`} className={css.active} aria-current={'/inheritance/' + slug === pathname ? 'page' : 'false'}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button className={`${css.accordion} ${anima && css.button_active}`} onClick={() => setAnima(!anima)}>
        Animation
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {anima && (
        <ul className={css.list}>
          {animaData.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/animation/${slug}`} className={css.active} aria-current={'/animation/firemotion' === pathname ? 'page' : 'false'}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Accordion

const css = cssx.create({
  arrow: {
    position: 'absolute',
    right: 8
  },

  accordion: {
    fontSize: '13.7px',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 32,
    padding: '6px 8px',
    borderRadius: '4px',
    textAlign: 'left',
    cursor: 'pointer',

    hover: {
      background: 'var(--color-card)',
      color: 'var(--color-sub)',
      transition: 'all 0.2s'
    }
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: 176,
    padding: '0 0 0 12px',
    margin: '0 0 0 12px',
    cursor: 'pointer',
    borderLeft: 'solid 1px var(--color-border)',

    '& a': {
      width: 176,
      padding: '6px 8px'
    },
    '& button': {
      display: 'inline',
      textAlign: 'left',
      width: 176,
      height: 32,
      padding: '6px 8px',
      borderRadius: '4px',
      hover: {
        background: 'var(--color-card)',
        color: 'var(--color-sub)',
        transition: 'all 0.2s',
        cursor: 'pointer'
      }
    }
  },
  list_style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: 152,
    padding: '0 0 0 12px',
    margin: '0 0 0 12px',
    borderLeft: 'solid 1px var(--color-border)',
    '& a': {
      width: 152,
      padding: '6px 8px'
    }
  },
  button_active: {
    background: 'var(--color-card)',
    color: 'var(--color-sub)'
  },
  active: {
    "&[aria-current='false']:hover": {
      background: 'var(--color-card)',
      color: 'var(--color-sub)',
      transition: 'all 0.2s'
    },
    "&[aria-current='page']": {
      fontWeight: 600,
      color: 'var(--color-link)',
      background: 'var(--color-list)'
    },
    "&[aria-current='false']": {
      background: 'transparent',
      transition: 'background 0.15s, font-weight 0s'
    },
    [max_md]: {
      visibility: 'hidden'
    }
  }
})
