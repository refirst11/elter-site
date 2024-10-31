import elter, { max_md } from 'elter'
import { md768_1414 } from 'lib/media'

export const styles = elter.create({
  toggle_button: {
    zIndex: '3',
    position: 'relative',
    cursor: 'pointer',
    color: 'var(--color-text)',
    height: 32,
    width: 32,
    bottom: 8,
    marginLeft: 1120,
    transition: 'all 0.2s',
    [max_md]: {
      position: 'absolute',
      marginLeft: 'auto',
      top: 18,
      right: 74
    },
    [md768_1414]: {
      position: 'absolute',
      marginLeft: 'auto',
      top: 18,
      right: 122
    }
  },
  button_inner: {
    height: 22,
    width: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: 'solid 1px var(--color-border)',
    hover: {
      border: 'solid 1px var(--color-link)'
    }
  }
})
