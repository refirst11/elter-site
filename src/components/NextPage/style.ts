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
    borderTop: 'solid 1px var(--color-border)',
    gap: 16
  },
  desc: {
    position: 'absolute',
    top: 8,
    fontSize: 14,
    color: 'var(--color-text)'
  },

  title: {
    position: 'relative',
    bottom: '4px'
  },

  prev: {
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 16,
    left: 0,
    bottom: 0,
    width: 'calc(50% - 8px)',
    height: 64,
    padding: '0 0 6px 12px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderRadius: '5px',
    background: 'var(--color-card)',
    border: 'solid 1px var(--color-border2)',
    hover: {
      border: 'solid 1px var(--color-link)'
    }
  },
  next: {
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 16,
    right: 0,
    bottom: 0,
    width: 'calc(50% - 8px)',
    height: 64,
    padding: '0 12px 6px 0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: '5px',
    background: 'var(--color-card)',
    border: 'solid 1px var(--color-border2)',
    hover: {
      border: 'solid 1px var(--color-link)'
    }
  }
})
