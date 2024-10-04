import cssx, { max_md } from 'typedcssx'

export const css = cssx.create({
  button_initialize: {
    zIndex: 0,
    position: 'relative',
    top: 24,
    left: 4,
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'inline-block'
  },

  code_box: {
    zIndex: 0,
    position: 'relative',
    bottom: 15
  },

  wrapper: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'flex-end',
    height: 0,
    width: '100%'
  },

  copyButton: {
    zIndex: 1,
    position: 'absolute',
    fontSize: 12,
    right: 56,
    top: 32,
    height: 26,
    width: 26,
    backgroundColor: 'rgb(245, 245, 253)',
    border: 'solid 1px rgb(220, 220, 220)',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '6px',
    hover: {
      border: 'solid 1px var(--color-link)'
    }
  },

  icon_position: {
    position: 'absolute',
    right: 4,
    top: 4
  },

  noactive: {
    transition: 'all 0.2s',
    transform: 'scale(1.2)'
  },

  active: {
    transition: 'all 0s'
  },

  visible: {
    opacity: 0.9
  },

  hidden: {
    opacity: 0
  },

  tooltipWrapper: {
    position: 'absolute',
    right: 0
  },

  tooltip: {
    position: 'absolute',
    background: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: 12,
    bottom: '100%',
    top: 30,
    right: 85,
    height: 'max-content',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 1000,
    '&::after': {
      content: '',
      position: 'absolute',
      top: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: '#333 transparent transparent transparent'
    }
  },

  [max_md]: {
    copyButton: {
      scale: 0.8,
      right: 8,
      top: 32
    },
    tooltip: {
      scale: 0.8,
      right: 30
    }
  }
})
