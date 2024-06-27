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
      position: 'absolute',
      marginLeft: 'auto',
      top: 20,
      right: 110
    })
  }
})
