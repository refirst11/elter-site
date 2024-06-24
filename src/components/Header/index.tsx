'use client'

import '../../styles/global.css'
import React from 'react'
import { styles } from './style.css'
import Link from 'next/link'
import isCurrentLink from 'lib/isCurrentLink'
import { usePathname } from 'next/navigation'
import { ToggleDarkMode } from 'components/ToggleDarkMode'
import { GitIcon } from 'components/GitIcon'
import { Menu } from 'components/Menu'

export const Header = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <header className={styles.container}>
      <nav className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          Typed CSS X
        </Link>
        <Menu />
        <ToggleDarkMode />
        <GitIcon />
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link + ' ' + styles.active} aria-current={isCurrentLink(link.href, pathname) ? 'page' : 'false'}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
