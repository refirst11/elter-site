'use client'

import React, { ReactNode, useState, useRef, useEffect } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'
import cssx, { max_md } from 'typedcssx'

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
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setCopied(false)
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
        setTimeout(() => setCopied(false), 800)
      })
    }
  }

  const handleCodeBoxInteraction = () => {
    setVisible(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node) && codeRef.current && !codeRef.current.contains(event.target as Node)) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className={css.wrapper}>
        {items?.map((item, index) => (
          <button
            style={{
              borderBottom: activeTab === index ? 'solid 2px lightblue' : 'white',
              color: activeTab === index ? 'skyblue' : 'var(--color-heading)'
            }}
            className={css.button_initialize}
            key={index}
            onClick={() => handleTabClick(index)}>
            {item}
          </button>
        ))}
        <div className={css.tooltipWrapper}>
          <button
            ref={buttonRef}
            onClick={handleCopy}
            onMouseEnter={() => {
              setShowTooltip(true)
              handleCodeBoxInteraction()
            }}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            className={`${copied ? css.noactive + ' ' + css.copyButton : css.active + ' ' + css.copyButton} ${visible ? css.visible : css.hidden}`}>
            <div className={css.icon_position}>
              {copied ? <FiCheck size={16} color="#555" className={css.noactive} /> : <FiCopy size={16} color="gray" className={css.active} />}
            </div>
          </button>
          {showTooltip && <div className={css.tooltip}>{copied ? 'Copied!' : 'clipboard'}</div>}
        </div>
      </div>
      <div ref={codeRef} onMouseEnter={handleCodeBoxInteraction} onMouseLeave={() => setVisible(false)} onTouchStart={handleCodeBoxInteraction} className={css.code_box}>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </>
  )
}

export const Tab = ({ children }: { children: ReactNode }) => <>{children}</>

const css = cssx.create({
  button_initialize: {
    zIndex: 0,
    position: 'relative',
    top: 24,
    left: 4,
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'inline-block'
  },

  code_box: {
    zIndex: 0,
    position: 'relative',
    bottom: 15
  },

  wrapper: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'flex-end',
    height: 0,
    width: '100%'
  },

  copyButton: {
    zIndex: 1,
    position: 'absolute',
    fontSize: 12,
    right: 58,
    top: 32,
    height: 26,
    width: 26,
    backgroundColor: 'rgb(245, 245, 253)',
    border: 'solid 1px rgb(220, 220, 220)',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '6px'
  },

  icon_position: {
    position: 'absolute',
    right: 4,
    top: 4
  },

  noactive: {
    transition: 'all 0.2s',
    scale: 1.2
  },

  active: {
    transition: 'all 0.2s'
  },

  visible: {
    opacity: 0.9
  },

  hidden: {
    opacity: 0
  },

  tooltipWrapper: {
    position: 'absolute',
    right: 0
  },

  tooltip: {
    position: 'absolute',
    background: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: 12,
    bottom: '100%',
    top: -26,
    height: 'max-content',
    marginLeft: -70,
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 1000,
    '&::after': {
      content: '',
      position: 'absolute',
      top: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: '#333 transparent transparent transparent'
    }
  },

  [max_md]: {
    copyButton: {
      scale: 0.7,
      right: 6,
      top: 28
    },
    tooltip: {
      scale: 0.7,
      marginLeft: -24,
      top: -18
    }
  }
})
