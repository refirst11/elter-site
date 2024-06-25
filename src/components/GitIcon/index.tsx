import React from 'react'
import { ImGithub } from 'react-icons/im'
import { iconStyle, styles } from './style.css'

export const GitIcon = ({ classStyle }: { classStyle?: string }) => {
  return (
    <div className={`${styles.border_wrapper} ${classStyle}`}>
      <a href="https://github.com/typedcsslab/typedcssx/" target="_brank">
        <ImGithub size={20} className={iconStyle} />
      </a>
    </div>
  )
}
