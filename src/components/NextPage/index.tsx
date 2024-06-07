'use client';

import React from 'react';
import { styles } from './style.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NextPage = () => {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' },
  ];

  return <div className={styles.container}>{'<'}</div>;
};
