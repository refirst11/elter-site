import { Style } from 'typedcssx'

export const styles = Style.create({
  inputBox: {
    display: 'flex',
    position: 'relative',
    background: 'var(--color-card)',
    border: 'none',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    paddingLeft: 12,
    caretColor: 'var(--color-text)',
    transition: 'all 0.2s',
    outline: '3px solid transparent',
    focus: {
      outline: '3px solid skyblue'
    }
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
    position: 'relative',
    left: 190,
    top: -32,
    color: 'black',
    background: '#fff',
    border: 'solid 1px rgba(100, 100, 100, 0.3)',
    width: 50,
    borderRadius: '8px',
    scale: 0.65
  }
})
