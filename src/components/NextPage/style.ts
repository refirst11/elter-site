import cssx, { max_md } from 'typedcssx'

export const css = cssx.create({
  container: {
    zIndex: '0',
    position: 'relative',
    bottom: '0px',
    width: '100%',
    height: '205px',
    padding: '102px 0',
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: 'solid 1px var(--color-border)'
  },
  desc: {
    position: 'absolute',
    top: 4,
    fontSize: 12,
    color: 'var(--color-text)'
  },
  title: {
    fontSize: 14
  },
  prev: {
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 14,
    left: 0,
    bottom: 0,
    width: 280,
    height: 54,
    padding: '0 0 6px 12px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderRadius: '5px',
    background: 'var(--color-card)',
    border: 'solid 1px var(--color-border2)',
    hover: {
      border: 'solid 1px var(--color-link)'
    },
    [max_md]: {
      width: 120
    }
  },
  next: {
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 14,
    right: 0,
    bottom: 0,
    width: 280,
    height: 54,
    padding: '0 12px 6px 0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: '5px',
    background: 'var(--color-card)',
    border: 'solid 1px var(--color-border2)',
    hover: {
      border: 'solid 1px var(--color-link)'
    },
    [max_md]: {
      width: 120
    }
  }
})
