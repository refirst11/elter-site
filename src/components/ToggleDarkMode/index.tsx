import { useTheme } from 'next-themes'
import { styles } from './style'

export const ToggleDarkMode = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme()

  const handleChangeDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className={styles.toggle_button} onClick={handleChangeDarkMode}>
      <div className={styles.button_inner}>
        <div className="moonsun" />
      </div>
    </button>
  )
}
