'use client'

import { ReactNode } from 'react'
import useFiremotion from 'firemotion'
import elter from 'elter'

type AnimationProps = {
  children: ReactNode
}

const Animation = ({ children }: AnimationProps): JSX.Element => {
  const animate = useFiremotion(styles.base, [styles.entry, styles.exit], 0.11)

  return <main className={animate}>{children}</main>
}

const styles = elter.create({
  base: {
    opacity: 1,
    transition: 'all 0.12s'
  },

  entry: {
    opacity: 0,
    filter: 'blur(8px)'
  },

  exit: {
    opacity: 0,
    transition: 'all 0.1s'
  }
})

export default Animation
