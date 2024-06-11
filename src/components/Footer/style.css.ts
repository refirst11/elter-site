import { Scoped, media } from 'typedcssx'

export const styles = Scoped.sheet({
  footer_container: {
    position: 'absolute',
    width: '100%',
    top: '280px',
    textAlign: 'center',
    marginRight: '500px'
  },
  footer_main: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '48px 24px',
    width: '100%',
    height: '360px',
    borderTop: 'solid 1px var(--color-border)'
  }
})
