import cssx, { max_md } from 'typedcssx'
import { md768_1414 } from 'lib/media'

export const css = cssx.create({
  inputBox: {
    display: 'flex',
    zIndex: '3',
    position: 'relative',
    top: -16,
    background: 'var(--color-card)',
    border: 'none',
    width: 240,
    height: 33.5,
    borderRadius: '8px',
    paddingLeft: 12,
    left: '50%',
    transform: 'translate(-178%)',
    caretColor: 'var(--color-text)',
    transition: 'outline 0.2s',
    outline: '3px solid transparent',
    focus: {
      outline: '3px solid skyblue'
    },
    color: 'var(--color-text)',
    [max_md]: {
      transform: 'translate(0)',
      top: 16,
      left: 20,
      width: '50%'
    },
    [md768_1414]: {
      top: 16,
      left: 280,
      transform: 'translate(0%)'
    }
  },
  cmdk: {
    zIndex: '3',
    position: 'fixed',
    top: 17,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    background: '#fff',
    border: 'solid 1px rgba(100, 100, 100, 0.3)',
    borderRadius: '8px',
    width: 50,
    scale: 0.65,
    left: '50%',
    transform: 'translate(-730%)',
    [max_md]: {
      transform: 'translate(0)',
      top: 18,
      marginLeft: -30
    },
    [md768_1414]: {
      left: 470,
      transform: 'translate(0%)'
    }
  }
})
