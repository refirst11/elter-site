'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import Style from 'typedcssx'
import PostsData from 'types/PostsData'
import { styles } from './List.css'
import { usePathname } from 'next/navigation'

type AccordionProps = {
  core: PostsData[]
  helpers: PostsData[]
  hooks: PostsData[]
}

const Accordion = ({ core, helpers, hooks }: AccordionProps) => {
  const [api, setAPI] = useState(true)
  const [style, setStyle] = useState(true)
  const [help, setHelp] = useState(true)
  const [hook, setHook] = useState(true)
  const pathname = usePathname()

  return (
    <>
      <button className={`${stylesA.accordion} ${api && stylesA.button_active}`} onClick={() => setAPI(!api)}>
        Core API
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {api && (
        <ul className={stylesA.list}>
          <li>
            <button className={`${style && stylesA.button_active}`} onClick={() => setStyle(!style)}>
              Style <IoMdArrowDropright className={stylesA.arrow} style={{ rotate: style ? '90deg' : '0deg' }} />
            </button>
          </li>
          {style && (
            <ul className={stylesA.list_style}>
              {core.map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/core-api/${slug}`} className={styles.active} aria-current={'/core-api/' + slug === pathname ? 'page' : 'false'}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
      <button className={`${stylesA.accordion} ${help && stylesA.button_active}`} onClick={() => setHelp(!help)}>
        Helpers
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {help && (
        <ul className={stylesA.list}>
          {helpers.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/helpers/${slug}`} className={styles.active} aria-current={'/helpers/' + slug === pathname ? 'page' : 'false'}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button className={`${stylesA.accordion} ${hook && stylesA.button_active}`} onClick={() => setHook(!hook)}>
        Hooks
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {hook && (
        <ul className={stylesA.list}>
          {hooks.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/hooks/${slug}`} className={styles.active} aria-current={'/hooks/useFiremotion' === pathname ? 'page' : 'false'}>
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

const stylesA = Style.create({
  arrow: {
    position: 'absolute',
    right: 8
  },

  accordion: {
    fontSize: '13.7px',
    textDecoration: 'none',
    color: '#959595',
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
    color: '#959595',
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
  }
})
