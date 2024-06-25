import { Style, media } from 'typedcssx'

const mobile = media('max-width: 799px')

export const styles = Style.create({
  list_position: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    transform: 'translate(-120%, 0%)',
    gap: 4,
    boxSizing: 'border-box',
    '& li': {
      listStyleType: 'none'
    },
    '& a': {
      fontSize: '13.7px',
      textDecoration: 'none',
      color: '#959595',
      display: 'block',
      width: 200,
      height: 32,
      padding: '4px 8px',
      borderRadius: '4px'
    }
  },
  ...mobile({
    list_position: {
      display: 'none'
    }
  }),
  active: {
    "&[aria-current='false']:hover": {
      background: 'var(--color-card)',
      color: 'var(--color-sub)',
      transition: 'all 0.2s'
    },
    "&[aria-current='page']": {
      fontWeight: 600,
      color: 'var(--color-link)',
      background: 'var(--color-list)'
    },
    "&[aria-current='false']": {
      background: 'transparent',
      transition: 'background 0.15s, font-weight 0s'
    }
  },
  ...mobile({
    active: {
      visibility: 'hidden'
    }
  })
})
