import { Style, media } from 'typedcssx'

export const styles = Style.create({
  footer_container: {
    zIndex: '0',
    position: 'absolute',
    width: '100%',
    top: '120px',
    textAlign: 'center',
    paddingTop: 50,
    height: 140,
    borderTop: 'solid 1px var(--color-border)',
    '& span': {
      marginRight: 1180
    }
  },
  footer_main: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: '140px'
  },
  nextlogo: {
    zIndex: '0',
    position: 'absolute',
    right: '25%',
    top: '170px',
    textAlign: 'center'
  }
})
