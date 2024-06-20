import { Style } from 'typedcssx'

export const styles = Style.create({
  inputBox: {
    display: 'flex',
    zIndex: '3',
    position: 'fixed',
    top: 16,
    background: 'var(--color-card)',
    border: 'none',
    width: 240,
    height: 33.5,
    borderRadius: '8px',
    paddingLeft: 12,
    marginLeft: -80,
    caretColor: 'var(--color-text)',
    transition: 'all 0.2s',
    outline: '3px solid transparent',
    focus: {
      outline: '3px solid skyblue'
    },
    color: 'var(--color-text)'
  },
  box: {
    position: 'absolute',
    marginRight: 1460,
    top: -4,
    width: 240,
    height: 33.5,
    borderRadius: '12px'
  },
  cmdk: {
    zIndex: '3',
    position: 'relative',
    left: 110,
    top: -42,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    background: '#fff',
    border: 'solid 1px rgba(100, 100, 100, 0.3)',
    width: 50,
    borderRadius: '8px',
    scale: 0.65
  }
})
