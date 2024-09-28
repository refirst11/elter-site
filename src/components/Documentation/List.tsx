'use client'

import Link from 'next/link'
import PostsData from 'types/PostsData'
import { usePathname } from 'next/navigation'
import cssx, { max_md } from 'typedcssx'
import { max_1414 } from 'lib/media'
import Accordion from './Accordion'

type ListsProps = {
  docs: PostsData[]
  apiData: PostsData[]
  helperData: PostsData[]
  hookData: PostsData[]
}

const Lists = ({ docs, apiData, helperData, hookData }: ListsProps) => {
  const pathname = usePathname()

  return (
    pathname !== '/' && (
      <ul className={css.list_position}>
        {docs?.map(({ slug, title }) => (
          <li key={slug}>
            <Link className={css.active} href={`/${slug}`} aria-current={'/' + slug === pathname ? 'page' : 'false'}>
              {title}
            </Link>
          </li>
        ))}
        <Accordion apiData={apiData} helperData={helperData} hookData={hookData} />
      </ul>
    )
  )
}

export default Lists

export const css = cssx.create({
  list_position: {
    position: 'fixed',
    width: 240,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    transform: 'translate(-120%, 0%)',
    gap: 4,
    boxSizing: 'border-box',
    '& li': {
      listStyleType: 'none'
    },
    '& a': {
      display: 'block',
      fontSize: '13.7px',
      textDecoration: 'none',
      color: 'var(--color-accordion-text)',
      height: 32,
      padding: '6px 8px',
      borderRadius: '4px'
    }
  },
  [max_md]: {
    list_position: {
      display: 'none'
    }
  },
  [max_1414]: {
    list_position: {
      left: 0,
      transform: 'translate(0%, 0%)'
    }
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
