import Style, { max_md } from 'typedcssx'
import { md768_1414 } from 'lib/media'

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
    [max_md]: {
      position: 'absolute',
      marginLeft: 'auto',
      top: 20,
      right: 110
    },
    [md768_1414]: {
      position: 'absolute',
      right: 120
    }
  }
})
