import { Style, media } from 'typedcssx'

export const styles = Style.create({
  container: {
    zIndex: '2',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    height: '64px',
    borderBottom: 'solid 1px var(--color-border)',
    background: 'var(--color-bg)'
  },

  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    top: '20px',
    left: '400px',
    height: '0',
    listStyleType: 'none',
    listStylePosition: 'inside'
  },

  logo: {
    position: 'absolute',
    color: 'var(--color-heading)',
    fontWeight: '700',
    marginRight: 2020,
    width: 110,
    textDecoration: 'none'
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none'
  },
  active: {
    color: 'var(--color-heading)',
    fontWeight: '550'
  },
  noactive: {
    color: 'var(--color-heading)',
    fontWeight: '300'
  }
})
