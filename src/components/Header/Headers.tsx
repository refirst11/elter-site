'use client'

import React from 'react'
import Link from 'next/link'
import isCurrentLink from 'lib/isCurrentLink'
import { usePathname } from 'next/navigation'
import { ToggleDarkMode } from 'components/ToggleDarkMode'
import { GitIcon } from 'components/GitIcon'
import { SearchBox } from 'components/SearchBox'
import elter, { union, max_md } from 'elter'
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
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image className={styles.left_logo} src="/logo.png" alt={'Main_Logo'} width={24} height={24} />
        <span className={styles.display_logo}>elter</span>
        <span className={styles.version}>v{version}</span>
      </Link>
      <GitIcon />
      <ToggleDarkMode />
      <SearchBox classDisplay={styles.display_search} />
      <nav className={styles.wrapper}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={union(styles.link, styles.active)} aria-current={isCurrentLink(link.href, pathname) ? 'page' : 'false'}>
            {link.label}
          </Link>
        ))}

        <a className={union(styles.hover, styles.link)} href={discuss} target="_blank">
          Discussions <HiOutlineExternalLink />
        </a>
      </nav>
    </header>
  )
}

const styles = elter.create({
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
    transform: 'translate(-416%)',
    top: 16,
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

  left_logo: {
    position: 'relative',
    top: 1,
    left: 8,
    [max_md]: {
      left: 0
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

  version: {
    position: 'relative',
    top: 1,
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
