import React from 'react'
import { ImGithub } from 'react-icons/im'
import { cssIcon, css } from './style'

export const GitIcon = () => {
  return (
    <div className={css.border_wrapper}>
      <a href="https://github.com/typedcsslab/typedcssx/" target="_brank">
        <ImGithub size={20} className={cssIcon} />
      </a>
    </div>
  )
}
