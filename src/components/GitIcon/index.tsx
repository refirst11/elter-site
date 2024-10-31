import React from 'react'
import { ImGithub } from 'react-icons/im'
import { styleIcon, styles } from './style'

export const GitIcon = () => {
  return (
    <div className={styles.border_wrapper}>
      <a href="https://github.com/elterjs/elter/" target="_brank">
        <ImGithub size={20} className={styleIcon} />
      </a>
    </div>
  )
}
