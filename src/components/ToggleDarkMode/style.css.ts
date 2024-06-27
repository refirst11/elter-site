import { Style, media } from 'typedcssx'

const mobile = media('max-width: 799px')

export const styles = Style.create({
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
    ...mobile({
      position: 'absolute',
      marginLeft: 'auto',
      top: 22,
      right: 68
    })
  }
})
