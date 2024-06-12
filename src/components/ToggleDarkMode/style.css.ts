import { Scoped, media } from 'typedcssx'

export const styles = Scoped.sheet({
  toggle_button: {
    position: 'absolute',
    top: 4,
    cursor: 'pointer',
    color: 'var(--color-text)'
  },
  toggle_wrapper: {
    marginLeft: '240px',
    borderRadius: '50%',
    height: 24,
    width: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 1px var(--color-border)'
  }
})
