import { Style } from 'typedcssx'
import { mobile } from '../../lib/mobile'

export const iconStyle = Style.set({
  zIndex: '3',
  position: 'relative',
  top: 4,
  color: 'gray',
  hover: {
    color: '#666'
  }
})

export const styles = Style.create({
  border_wrapper: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 18,
    marginLeft: 1146,
    width: 60,
    height: 26,
    borderLeft: 'solid 1px var(--color-border)',
    borderRight: 'solid 1px var(--color-border)',
    ...mobile({
      display: 'none',
      marginLeft: '0',
      left: 140
    })
  }
})

export const displayOnGit = Style.set({
  display: 'flex',
  position: 'absolute',
  left: '66%',
  top: 6
})
