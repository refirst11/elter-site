'use client'

import React from 'react'
import { styles } from './style.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export const Footer = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_container}>
        <span className={styles.license}>MIT 2024 © refirst</span>
        <Image className={styles.nextlogo} src="/next.svg" alt="Next.js Logo" width={80} height={20} />
      </div>
    </footer>
  )
}
