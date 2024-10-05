'use client'

import React from 'react'
import Link from 'next/link'
import isCurrentLink from 'lib/isCurrentLink'
import { usePathname } from 'next/navigation'
import { ToggleDarkMode } from 'components/ToggleDarkMode'
import { GitIcon } from 'components/GitIcon'
import { SearchBox } from 'components/SearchBox'
import cssx, { union, max_md } from 'typedcssx'
import { md768_1414 } from 'lib/media'
import Image from 'next/image'
import { HiOutlineExternalLink } from 'react-icons/hi'

export const Headers = ({ version }: { version: string }) => {
  const discuss = process.env.NEXT_PUBLIC_DISCUSS_URL || ''
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/introduction', label: 'Documentation' }
  ]

  return (
    <header className={css.container}>
      <Link href="/" className={css.logo}>
        <Image className={css.left_icon} src="/left_logo.png" alt={'Main_Logo'} width={32.2} height={12.6} />
        <span className={css.display_logo}>TypedCSSX</span>
        <span className={css.version}>v{version}</span>
      </Link>
      <GitIcon />
      <ToggleDarkMode />
      <SearchBox classDisplay={css.display_search} />
      <nav className={css.wrapper}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={union(css.link, css.active)} aria-current={isCurrentLink(link.href, pathname) ? 'page' : 'false'}>
            {link.label}
          </Link>
        ))}

        <a className={union(css.hover, css.link)} href={discuss} target="_blank">
          Discussions <HiOutlineExternalLink />
        </a>
      </nav>
    </header>
  )
}

const css = cssx.create({
  container: {
    zIndex: '2',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    height: '64px',
    width: '100%',
    borderBottom: 'solid 1px var(--color-border)',
    background: 'var(--color-bg)'
  },

  wrapper: {
    zIndex: '2',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    top: '18px',
    left: '50%',
    marginLeft: 160,
    height: '64px',
    listStyleType: 'none',
    listStylePosition: 'inside',
    [md768_1414]: {
      display: 'flex',
      position: 'absolute',
      right: '284px',
      left: 'auto'
    },
    ['@media (max-width: 1084px)']: {
      display: 'none'
    }
  },

  logo: {
    fontFamily: 'var(--Inter)',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: 10.15,
    color: 'var(--color-logo)',
    fontSize: 14,
    fontWeight: 'bold',
    left: '50%',
    transform: 'translate(-316%)',
    top: 18,
    padding: '4px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    [max_md]: {
      left: 0,
      top: 16,
      transform: 'none'
    },
    [md768_1414]: {
      left: '16px',
      transform: 'translate(0%)'
    }
  },

  display_search: {
    height: 0,
    [max_md]: {
      display: 'none'
    }
  },

  display_logo: {
    [max_md]: {
      display: 'none'
    }
  },

  left_icon: {
    filter: 'var(--color-filter)',
    position: 'relative',
    top: 2
  },

  version: {
    position: 'relative',
    right: 6,
    fontWeight: 400,
    fontSize: 12.4,
    [max_md]: {
      top: 2
    }
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: 'var(--color-heading)',
    textDecoration: 'none',
    width: 'fit-content',
    height: '26px',
    [max_md]: {
      display: 'none'
    }
  },
  hover: {
    hover: {
      color: 'var(--color-link)',
      transition: 'all 0.2s'
    }
  },
  active: {
    "&[aria-current='page']": {
      fontWeight: '550'
    },
    "&[aria-current='false']": {
      fontWeight: '300'
    }
  }
})
