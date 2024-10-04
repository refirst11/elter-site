'use client'

import { useEffect } from 'react'
const tocbot = require('tocbot')

export const TocBot = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: 'body',
      headingSelector: 'h2, h3',
      headingsOffset: 220,
      scrollSmoothOffset: -220,
      orderedList: false
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <div className="outer_container">
      <p className="title">On this page</p>
      <nav className="toc" />
    </div>
  )
}
