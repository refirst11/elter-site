import { Style, media } from 'typedcssx'

export const styles = Style.create({
  Logo: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 55,
    fontWeight: '600',
    top: -160,
    height: '75px',
    color: 'var(--color-logo)'
  },
  text: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 55,
    fontWeight: '600',
    top: -100,
    marginRight: 80,
    height: '75px',
    color: 'var(--color-accent)'
  },
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    gap: 40,
    width: 'max-content',
    '& div': {
      width: 300,
      height: 240,
      background: 'var(--color-card)',
      padding: '10px 20px',
      borderRadius: '16px'
    },
    '& h2': {
      fontSize: 24,
      borderBottom: 'none',
      marginTop: 50,
      height: 'max-content'
    },
    '& p': {
      marginTop: 8
    },
    '& div span': {
      position: 'absolute',
      top: 6,
      display: 'block',
      fontSize: 36
    }
  }
})
