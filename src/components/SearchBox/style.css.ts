import { Style } from 'typedcssx'
import { mobile } from '../../lib/mobile'

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
    marginLeft: -10,
    caretColor: 'var(--color-text)',
    transition: 'outline 0.2s',
    outline: '3px solid transparent',
    focus: {
      outline: '3px solid skyblue'
    },
    color: 'var(--color-text)',
    ...mobile({
      marginLeft: 'auto',
      left: 20
    })
  },
  cmdk: {
    zIndex: '3',
    position: 'fixed',
    marginLeft: 180,
    top: 18,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    background: '#fff',
    border: 'solid 1px rgba(100, 100, 100, 0.3)',
    width: 50,
    borderRadius: '8px',
    scale: 0.65,
    ...mobile({
      marginLeft: 186
    })
  }
})
