'use client'

import React, { ReactNode, useState, useRef, useEffect } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { styles } from './style'
import { union } from 'elter'
type TabsProps = {
  children: ReactNode
  items?: string[]
}

export const Tabs = ({ items, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isHoveringCodeBlockRef = useRef(false)
  const isHoveringButtonRef = useRef(false)

  const handleMouseEnterCodeBlock = () => {
    isHoveringCodeBlockRef.current = true
    setVisible(true)
  }

  const handleMouseLeaveCodeBlock = () => {
    isHoveringCodeBlockRef.current = false
    if (!isHoveringButtonRef.current) {
      setVisible(false)
    }
  }

  const handleMouseEnterButton = () => {
    isHoveringButtonRef.current = true
    setVisible(true)
  }

  const handleMouseLeaveButton = () => {
    isHoveringButtonRef.current = false
    if (!isHoveringCodeBlockRef.current) {
      setVisible(false)
    }
  }

  const handleCopy = () => {
    if (codeRef.current) {
      const fragment = document.createDocumentFragment()
      fragment.appendChild(codeRef.current.cloneNode(true))

      const figcaptions = fragment.querySelectorAll('figcaption')
      figcaptions.forEach((figcaption) => figcaption.remove())

      const text = fragment.textContent || ''

      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setShowTooltip(true)
        setTimeout(() => {
          setCopied(false)
          setShowTooltip(false)
          if (!isHoveringCodeBlockRef.current && !isHoveringButtonRef.current) {
            setVisible(false)
          }
        }, 2500)
      })
    }
  }

  useEffect(() => {
    const clear = timeoutRef.current
    return () => {
      if (clear) clearTimeout(clear)
    }
  }, [])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setCopied(false)
  }

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      if (codeRef.current && !codeRef.current.contains(event.target as Node)) {
        setVisible(false)
      }
    }

    document.addEventListener('touchend', handleTouchOutside)

    return () => {
      document.removeEventListener('touchend', handleTouchOutside)
    }
  }, [])

  useEffect(() => {
    if (copied) {
      setVisible(true)
    } else if (!isHoveringCodeBlockRef.current && !isHoveringButtonRef.current) {
      setVisible(false)
    }
  }, [copied])

  return (
    <>
      <div className={styles.wrapper}>
        {items?.map((item, index) => (
          <button className={union(styles.button_initialize, activeTab === index ? styles.tab_active : styles.tab_noactive)} key={index} onClick={() => handleTabClick(index)}>
            {item}
          </button>
        ))}
        <div className={styles.tooltipWrapper}>
          <button
            onPointerDown={handleCopy}
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveButton}
            className={`${copied ? styles.noactive + ' ' + styles.copyButton : styles.active + ' ' + styles.copyButton} ${visible || copied ? styles.visible : styles.hidden}`}>
            <div className={styles.icon_position}>
              {copied ? <FiCheck size={16} color="#555" className={styles.noactive} /> : <FiCopy size={16} color="gray" className={styles.active} />}
            </div>
          </button>
          {showTooltip && <div className={styles.tooltip}>{copied ? 'Copied' : 'Failed to copy'}</div>}
        </div>
      </div>
      <div ref={codeRef} onMouseEnter={handleMouseEnterCodeBlock} onMouseLeave={handleMouseLeaveCodeBlock} className={styles.code_box}>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </>
  )
}

export const Tab = ({ children }: { children: ReactNode }) => <>{children}</>
