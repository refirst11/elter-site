import { Style, media } from 'typedcssx'

const mobile = media('max-width: 799px')

export const styles = Style.create({
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
    borderRight: 'solid 1px var(--color-border)',
    ...mobile({
      position: 'absolute',
      marginRight: 0,
      left: '20px'
    })
  }
})
