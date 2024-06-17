'use client'

import { useState, useEffect, useRef } from 'react'
import { SearchResults } from 'components/SearchResults'
import { styles } from './style.css'

export const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.box}>
      <input ref={inputRef} className={styles.inputBox} value={keyword} placeholder={'Search Documents...'} type="text" onChange={(e) => setKeyword(e.target.value)} />
      <div className={styles.cmdk}>⌘ K</div>
      {keyword && <SearchResults keyword={keyword} />}
    </div>
  )
}
