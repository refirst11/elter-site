import Style, { max_xl } from 'typedcssx'

export const styles = Style.create({
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
    top: 12,
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
    height: 64,
    padding: '0 0 6px 18px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderRadius: '12px',
    background: 'var(--color-card)',
    border: 'solid 1px var(--color-border2)',
    hover: {
      border: 'solid 1px var(--color-link)'
    },
    [max_xl]: {
      width: 140
    }
  },
  next: {
    position: 'absolute',
    textDecoration: 'none',
    fontSize: 14,
    right: 0,
    bottom: 0,
    width: 280,
    height: 64,
    padding: '0 18px 6px 0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: '12px',
    background: 'var(--color-card)',
    border: 'solid 1px var(--color-border2)',
    hover: {
      border: 'solid 1px var(--color-link)'
    },
    [max_xl]: {
      width: 140
    }
  }
})
