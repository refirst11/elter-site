'use client'

import { useState, useEffect, useRef } from 'react'
import { SearchResults } from 'components/SearchResults'
import { styles } from './style.css'

export const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const closeLink = () => {
    setShowResults(false)
    setKeyword('')
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      closeLink()
    }
  }

  return (
    <div ref={containerRef}>
      <input
        ref={inputRef}
        className={styles.inputBox}
        value={keyword}
        placeholder={'Search Documents...'}
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value)
          setShowResults(true)
        }}
        onKeyDown={handleInputKeyDown}
      />
      <div className={styles.cmdk}>{keyword ? 'ESC' : '⌘ K'}</div>
      {showResults && keyword && <SearchResults onClick={closeLink} keyword={keyword} />}
    </div>
  )
}
