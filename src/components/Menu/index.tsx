import { useState } from 'react'
import { styles } from './style.css'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.Line}>
      <button
        aria-expanded={open}
        onClick={() => {
          setOpen(!open)
        }}
        aria-label="Toggle mobile navigation menu"
        type="button">
        <span />
        <span />
        <span />
      </button>
    </div>
  )
}
