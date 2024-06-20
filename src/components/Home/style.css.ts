import { Style, media } from 'typedcssx'

export const styles = Style.create({
  link1: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    top: -140,
    marginRight: 160,
    height: '40px',
    padding: '12px 24px',
    background: 'var(--color-logo2)',
    color: 'var(--color-bg)',
    fontWeight: '500',
    borderRadius: '20px',
    textDecoration: 'none',
    hover: {
      background: 'var(--color-logo)'
    }
  },
  link2: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -140,
    marginLeft: 160,
    height: '40px',
    width: 125.75,
    padding: '12px 24px',
    background: 'var(--color-bg2)',
    color: 'var(--color-text2)',
    fontWeight: '500',
    borderRadius: '20px',
    textDecoration: 'none',
    hover: {
      background: 'var(--color-bg3)'
    }
  },
  Logo: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 55,
    fontWeight: '600',
    top: -250,
    height: '75px',
    color: 'var(--color-logo)'
  },
  text: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 36,
    fontWeight: '600',
    top: -140,
    left: 20,
    height: '75px',
    color: 'var(--color-accent)'
  },
  tagline: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '400',
    top: -80,
    left: 26,
    color: 'var(--color-text)'
  },
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: '60%',
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
      height: 'max-content',
      '&::after': {
        content: 'none'
      }
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
