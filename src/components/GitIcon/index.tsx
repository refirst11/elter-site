import React from 'react'
import { ImGithub } from 'react-icons/im'
import { style } from './style.css'
export const GitIcon = () => {
  return (
    <a href="https://github.com/typedcsslab/typedcssx/" target="_brank">
      <ImGithub size={20} className={style} />
    </a>
  )
}
