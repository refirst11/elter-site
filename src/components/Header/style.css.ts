import Style, { max_xl } from 'typedcssx'

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
    top: '-40px',
    left: '420px',
    height: '0',
    listStyleType: 'none',
    listStylePosition: 'inside'
  },

  logo: {
    position: 'absolute',
    color: 'var(--color-heading)',
    fontWeight: 400,
    left: '50%',
    transform: 'translate(-420%)',
    top: 18,
    width: 160,
    padding: '2px 4px',
    borderRadius: '8px',
    textDecoration: 'none',
    [max_xl]: {
      display: 'none'
    },
    outline: '3px solid transparent',
    hover: {
      transition: 'all 0.2s',
      outline: '3px solid skyblue'
    }
  },

  ontline: {
    transition: 'all 0.4s',
    outline: '3px solid skyblue'
  },

  version: {
    fontWeight: 400,
    fontSize: 12.4
  },

  link: {
    fontSize: '14px',
    textDecoration: 'none',
    width: 'fit-content',
    height: '26px',
    [max_xl]: {
      display: 'none'
    }
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
