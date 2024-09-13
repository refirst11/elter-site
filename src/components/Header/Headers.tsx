'use client'

import React from 'react'
import { css } from './style'
import Link from 'next/link'
import isCurrentLink from 'lib/isCurrentLink'
import { usePathname } from 'next/navigation'
import { ToggleDarkMode } from 'components/ToggleDarkMode'
import { GitIcon } from 'components/GitIcon'
import { SearchBox } from 'components/SearchBox'

export const Headers = ({ version }: { version: string }) => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <header className={css.container}>
      <Link href="/" className={`${css.logo} ${pathname == '/' ? css.ontline : ''}`}>
        typedcssx <span className={css.version}>v{version}</span>
      </Link>
      <GitIcon />
      <ToggleDarkMode />
      <SearchBox />
      <nav className={css.wrapper}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={css.link + ' ' + css.active} aria-current={isCurrentLink(link.href, pathname) ? 'page' : 'false'}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
