'use client';

import React from 'react';
import { styles } from './style.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' },
  ];

  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_container}>MIT 2024 © refirst</div>
    </footer>
  );
};
