import { Scoped, media } from 'typedcssx'

export const styles = Scoped.sheet({
  toggle_button: {
    position: 'absolute',
    cursor: 'pointer',
    color: 'var(--color-text)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px'
  },
  toggle_wrapper: {
    borderRadius: '50%',
    cursor: 'pointer',
    height: 22,
    width: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 1px var(--color-border)',
    hover: {
      border: 'solid 1px var(--color-accent)'
    },
    transition: 'all 0.2s'
  },
  border_wrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '280px',
    width: 60,
    height: 26,
    borderLeft: 'solid 1px var(--color-border)',
    borderRight: 'solid 1px var(--color-border)'
  }
})
