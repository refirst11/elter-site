import { Style, media } from 'typedcssx'

const mobile = media('max-width: 799px')

export const styles = Style.create({
  container: {
    zIndex: '2',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    height: '64px',
    width: '100%',
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
    textDecoration: 'none',
    ...mobile({
      position: 'absolute',
      marginRight: 0,
      left: '20px'
    })
  },

  link: {
    fontSize: '14px',
    textDecoration: 'none',
    ...mobile({
      position: 'absolute',
      marginRight: 0,
      left: '20px'
    })
  },
  active: {
    "&[aria-current='page']": {
      color: 'var(--color-heading)',
      fontWeight: '550'
    },
    "&[aria-current='false']": {
      color: 'var(--color-heading)',
      fontWeight: '300'
    }
  }
})
