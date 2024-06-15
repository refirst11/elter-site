import { Style } from 'typedcssx'

export const styles = Style.create({
  button_initialize: {
    zIndex: '1',
    position: 'relative',
    top: '24px',
    left: 4,
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'inline-block'
  },

  code_box: {
    position: 'relative',
    bottom: '15px'
  },
  wrapper: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'flex-end',
    height: 0
  },
  copyButton: {
    zIndex: '1',
    position: 'relative',
    fontSize: '12px',
    marginLeft: 'auto',
    right: '68px',
    top: '62px',
    height: '30px',
    width: '30px',
    backgroundColor: 'rgb(245, 245, 253)',
    border: 'solid 1px rgb(220, 220, 220)',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '6px'
  },
  icon_position: {
    position: 'absolute',
    right: '5px',
    top: '5px'
  },
  noactive: {
    transition: 'all 0.2s',
    scale: '1.2'
  },
  active: {
    transition: 'all 0.2s'
  },
  visible: {
    opacity: '1'
  },
  hidden: {
    opacity: '0'
  }
})
