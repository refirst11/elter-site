'use client'

import Link from 'next/link'
import PostsData from 'types/PostsData'
import { usePathname } from 'next/navigation'
import { styles } from './style.css'

type ListsProps = {
  posts: PostsData[]
}

const Lists = ({ posts }: ListsProps) => {
  const pathname = usePathname()

  return (
    pathname !== '/' && (
      <ul className={styles.list_position}>
        {posts?.map(({ slug, title }) => (
          <li key={slug}>
            <Link className={styles.active} href={`/${slug}`} aria-current={'/' + slug === pathname ? 'page' : 'false'}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    )
  )
}

export default Lists
