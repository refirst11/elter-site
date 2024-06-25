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
    zIndex: '2',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    top: '-8px',
    left: '420px',
    height: '0',
    listStyleType: 'none',
    listStylePosition: 'inside'
  },

  logo: {
    position: 'absolute',
    color: 'var(--color-heading)',
    fontWeight: '700',
    marginLeft: -665,
    top: 18,
    width: 110,
    textDecoration: 'none',
    ...mobile({
      display: 'block',
      marginLeft: 'auto',
      top: 20,
      left: 20
    })
  },

  link: {
    fontSize: '14px',
    textDecoration: 'none',
    width: 'fit-content',
    height: '26px',
    ...mobile({
      display: 'none'
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
