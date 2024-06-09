'use client'

import React from 'react'
import { styles } from './style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <header className={styles.container}>
      <nav className={styles.wrapper}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link + ' ' + (pathname === link.href ? styles.active : styles.noactive)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
