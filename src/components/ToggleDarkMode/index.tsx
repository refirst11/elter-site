import { useEffect, useState } from 'react'
import { styles } from './style.css'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ToggleDarkMode = (): JSX.Element | null => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (isDark: boolean) => {
      setDarkMode(isDark)
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }

    if (currentTheme === 'dark') {
      applyTheme(true)
    } else if (currentTheme === 'light') {
      applyTheme(false)
    } else {
      applyTheme(mediaQuery.matches)
      mediaQuery.addEventListener('change', (e) => applyTheme(e.matches))
    }

    return () => {
      mediaQuery.removeEventListener('change', (e) => applyTheme(e.matches))
    }
  }, [])

  const handleChangeDarkMode = () => {
    if (darkMode) {
      setDarkMode(false)
      localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setDarkMode(true)
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  if (darkMode === undefined) {
    return null
  }

  return (
    <div className={styles.toggle_wrapper}>
      <button className={styles.toggle_button} onClick={handleChangeDarkMode}>
        {darkMode ? <FiMoon /> : <FiSun size={10} />}
      </button>
    </div>
  )
}
