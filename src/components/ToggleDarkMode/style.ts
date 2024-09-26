import cssx, { max_md } from 'typedcssx'
import { md768_1414 } from 'lib/media'

export const styles = cssx.create({
  toggle_button: {
    zIndex: '3',
    position: 'relative',
    cursor: 'pointer',
    color: 'var(--color-text)',
    height: 32,
    width: 32,
    top: 18,
    marginLeft: 20,
    transition: 'all 0.2s',
    [max_md]: {
      position: 'absolute',
      marginLeft: 'auto',
      top: 18,
      right: 74
    },
    [md768_1414]: {
      position: 'absolute',
      top: 16,
      right: 80,
      transform: 'translate(0%)'
    }
  },
  button_inner: {
    height: 22,
    width: 22,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: 'solid 1px var(--color-border)',
    hover: {
      border: 'solid 1px var(--color-link)'
    }
  }
})
