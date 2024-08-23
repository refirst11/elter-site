'use client'

import '../../styles/global.css'
import React from 'react'
import { styles } from './style.css'
import Link from 'next/link'
import isCurrentLink from 'lib/isCurrentLink'
import { usePathname } from 'next/navigation'
import { ToggleDarkMode } from 'components/ToggleDarkMode'
import { GitIcon } from 'components/GitIcon'
import { SearchBox } from 'components/SearchBox'
import { useVersion } from './useVersion'

export const Header = () => {
  const { version } = useVersion()
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <header className={styles.container}>
      <Link href="/" className={`${styles.logo} ${pathname == '/' ? styles.ontline : ''}`}>
        typedcssx <span className={styles.version}>v{version}</span>
      </Link>
      <GitIcon />
      <ToggleDarkMode />
      <SearchBox />
      <nav className={styles.wrapper}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link + ' ' + styles.active} aria-current={isCurrentLink(link.href, pathname) ? 'page' : 'false'}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
