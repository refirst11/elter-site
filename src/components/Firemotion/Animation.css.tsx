'use client'

import { ReactNode } from 'react'
import useFiremotion from 'firemotion'
import Style from 'typedcssx'

type AnimationProps = {
  children: ReactNode
}

const Animation = ({ children }: AnimationProps): JSX.Element => {
  const animate = useFiremotion(styles.base, [styles.entry, styles.exit], 0.2)

  return <main className={animate}>{children}</main>
}

const styles = Style.create({
  base: {
    opacity: 1,
    transition: 'all 0.4s'
  },

  entry: {
    opacity: 0,
    filter: 'blur(8px)'
  },

  exit: {
    opacity: 0,
    filter: 'blur(16px)',
    transition: 'all 0.17s'
  }
})

export default Animation
