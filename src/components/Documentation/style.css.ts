import { Style } from 'typedcssx'

export const styles = Style.create({
  list_position: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    transform: 'translate(-115%, 25%)',
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
  active: {
    "&[aria-current='false']:hover": {
      background: 'var(--color-card)',
      color: 'var(--color-sub)',
      transition: 'all 0.2s'
    },
    "&[aria-current='page']": {
      fontWeight: 600,
      color: 'var(--color-link)',
      background: 'var(--color-list)',
      transition: 'all 0.2s, font-weight 0s'
    },
    "&[aria-current='false']": {
      background: 'transparent',
      transition: 'all 0.15s, font-weight 0s'
    }
  }
})
