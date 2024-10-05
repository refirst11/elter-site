import { md768_1414 } from 'lib/media'
import cssx, { max_md } from 'typedcssx'

export const css = cssx.create({
  button_initialize: {
    zIndex: 4,
    position: 'relative',
    top: -53,
    left: 0,
    fontSize: 12,
    padding: '8px 16px 12px 16px',
    cursor: 'pointer'
  },

  code_box: {
    zIndex: 0,
    position: 'relative',
    bottom: 15
  },

  wrapper: {
    marginTop: 42,
    height: 0,
    before: {
      content: "''",
      zIndex: 0,
      position: 'relative',
      display: 'flex',
      top: -16,
      borderRadius: '4px 4px 0 0 ',
      height: '42px',
      width: '100%',
      boxShadow: 'var(--color-shadow)',
      background: 'var(--color-items)'
    }
  },

  copyButton: {
    zIndex: 1,
    position: 'absolute',
    fontSize: 12,
    right: 56,
    bottom: 18,
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
    bottom: 17,
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
      right: 4,
      bottom: 22
    },
    tooltip: {
      scale: 0.8,
      right: 24,
      bottom: 20
    }
  }
})
