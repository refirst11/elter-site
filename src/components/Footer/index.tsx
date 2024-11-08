'use client'

import { styles } from './style'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_container}>
        <span className={styles.license}>MIT 2024 © elterjs.</span>
        <Image className={styles.nextlogo} src="/next.svg" alt="Next.js Logo" width={80} height={20} />
      </div>
    </footer>
  )
}
