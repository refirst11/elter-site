'use client'

import React from 'react'
import { styles } from './style.css'
import Link from 'next/link'
import isCurrentLink from 'lib/isCurrentLink'
import { usePathname } from 'next/navigation'
import { ToggleDarkMode } from 'components/ToggleDarkMode'
import { GitIcon } from 'components/GitIcon'

export const Header = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <header className={styles.container}>
      <nav className={styles.wrapper}>
        <ToggleDarkMode />
        <GitIcon />
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link + ' ' + (isCurrentLink(link.href, pathname) ? styles.active : styles.noactive)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
