'use client'

import React from 'react'
import { css } from './style'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export const Footer = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' }
  ]

  return (
    <footer className={css.footer_main}>
      <div className={css.footer_container}>
        <span className={css.license}>MIT 2024 © refirst</span>
        <Image className={css.nextlogo} src="/next.svg" alt="Next.js Logo" width={80} height={20} />
      </div>
    </footer>
  )
}
