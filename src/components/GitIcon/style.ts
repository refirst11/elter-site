import elter, { max_md } from 'elter'
import { md768_1414 } from 'lib/media'

export const styleIcon = elter.style({
  zIndex: '3',
  position: 'relative',
  top: 4,
  color: 'gray',
  hover: {
    color: '#666'
  }
})

export const styles = elter.create({
  border_wrapper: {
    position: 'relative',
    top: 20,
    left: '50%',
    marginLeft: 462,
    width: 60,
    height: 26,
    borderLeft: 'solid 1px var(--color-border)',
    borderRight: 'solid 1px var(--color-border)',
    [max_md]: {
      position: 'absolute',
      borderLeft: 'solid 0px var(--color-border)',
      marginLeft: 'auto',
      top: 20,
      right: 116
    },
    [md768_1414]: {
      position: 'absolute',
      marginLeft: 'auto',
      right: 174
    }
  }
})
