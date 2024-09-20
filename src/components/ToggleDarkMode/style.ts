import cssx, { max_md } from 'typedcssx'
import { md768_1414 } from 'lib/media'

export const styles = cssx.create({
  toggle_button: {
    zIndex: '3',
    position: 'relative',
    cursor: 'pointer',
    color: 'var(--color-text)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px'
  },
  toggle_wrapper: {
    position: 'relative',
    borderRadius: '50%',
    cursor: 'pointer',
    height: 22,
    width: 22,
    top: 18,
    marginLeft: 20,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 1px var(--color-border)',
    hover: {
      border: 'solid 1px var(--color-accent)'
    },
    transition: 'all 0.2s',
    [max_md]: {
      position: 'absolute',
      marginLeft: 'auto',
      top: 23,
      right: 68
    },
    [md768_1414]: {
      position: 'absolute',
      top: 20,
      right: 80,
      transform: 'translate(0%)'
    }
  }
})
