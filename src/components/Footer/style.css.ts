import { Style, media } from 'typedcssx'

const mobile = media('max-width: 799px')

export const styles = Style.create({
  footer_main: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  footer_container: {
    zIndex: '0',
    position: 'absolute',
    width: '100%',
    top: '140px',
    right: 0,
    left: 0,
    textAlign: 'center',
    paddingTop: 46,
    height: 120,
    borderTop: 'solid 1px var(--color-border)'
  },

  license: {
    position: 'relative',
    right: '600px',
    ...mobile({
      position: 'absolute',
      right: 'auto',
      left: '20px'
    })
  },
  nextlogo: {
    position: 'relative',
    left: '600px',
    ...mobile({
      position: 'absolute',
      left: 'auto',
      right: '20px'
    })
  }
})
