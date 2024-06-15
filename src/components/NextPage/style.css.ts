import { Style, media } from 'typedcssx'

export const styles = Style.create({
  container: {
    zIndex: '1',
    position: 'relative',
    top: '100px',
    height: '92px',
    width: '100%',
    padding: '32px 0',
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  prev: {
    position: 'absolute',
    textDecoration: 'none',
    left: 0,
    width: 200,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px 48px',
    borderRadius: '12px',
    background: 'var(--color-card)',
    hover: {
      border: 'solid 0.4px var(--color-link)'
    }
  },
  next: {
    position: 'absolute',
    textDecoration: 'none',
    right: 0,
    width: 200,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    background: 'var(--color-card)',
    hover: {
      border: 'solid 0.4px var(--color-link)'
    }
  }
})
