'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import cssx, { union } from 'typedcssx'
import PostsData from 'types/PostsData'
import { css } from './List'
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
      <button className={union(cssA.accordion, api && cssA.button_active)} onClick={() => setAPI(!api)}>
        API
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {api && (
        <ul className={cssA.list}>
          <li>
            <button className={union(cssx && cssA.button_active)} onClick={() => setCSSX(!cssx)}>
              cssx <IoMdArrowDropright className={cssA.arrow} style={{ rotate: cssx ? '90deg' : '0deg' }} />
            </button>
          </li>
          {cssx && (
            <ul className={cssA.list_style}>
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
      <button className={`${cssA.accordion} ${inher && cssA.button_active}`} onClick={() => setInher(!inher)}>
        Inheritance
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {inher && (
        <ul className={cssA.list}>
          {inherData.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/inheritance/${slug}`} className={css.active} aria-current={'/inheritance/' + slug === pathname ? 'page' : 'false'}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button className={`${cssA.accordion} ${anima && cssA.button_active}`} onClick={() => setAnima(!anima)}>
        Animation
        <IoMdArrowDropright style={{ rotate: api ? '90deg' : '0deg' }} />
      </button>
      {anima && (
        <ul className={cssA.list}>
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

const cssA = cssx.create({
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
  }
})
