import cssx, { max_md } from 'typedcssx'

export const css = cssx.create({
  top_wrapper: {
    [max_md]: {
      height: '1460px',
      left: -240
    }
  },
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
    },
    [max_md]: {
      top: -344
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
    padding: '12px 20px',
    background: 'var(--color-bg2)',
    color: 'var(--color-text2)',
    fontWeight: '500',
    borderRadius: '20px',
    textDecoration: 'none',
    hover: {
      background: 'var(--color-bg3)'
    },
    [max_md]: {
      top: -344
    }
  },
  Logo: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 55,
    fontWeight: '600',
    top: -250,
    marginLeft: 16,
    height: '75px',
    color: 'var(--color-logo)',
    [max_md]: {
      marginLeft: 0,
      marginRight: 6,
      top: -580,
      fontSize: 45
    }
  },
  XStyle: {
    position: 'relative',
    top: 0,
    left: 20,
    color: 'var(--color-x-style)',
    fontWeight: 20,
    transform: 'skew(-48deg, -22deg)',
    scale: 1.2
  },
  text: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 36,
    fontWeight: '600',
    margin: 0,
    top: -80,
    left: 12,
    height: '75px',
    color: 'var(--color-heading)',
    [max_md]: {
      top: -480,
      fontSize: 26
    }
  },
  tagline: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '400',
    margin: 0,
    top: -20,
    left: 16,
    color: 'var(--color-text)',
    [max_md]: {
      top: -422,
      fontSize: 14
    }
  },
  card_container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    [max_md]: {
      bottom: 304,
      flexDirection: 'column'
    }
  },

  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    width: 'max-content',
    '& div': {
      position: 'relative',
      top: 40,
      width: 300,
      height: 240,
      background: 'var(--color-card)',
      padding: '10px 20px',
      borderRadius: '16px',
      [max_md]: {
        top: 60,
        height: 220
      }
    },
    '& h2': {
      fontSize: 24,
      borderBottom: 'none',
      marginTop: 50,
      height: 'max-content',
      '&::after': {
        content: 'none'
      },
      [max_md]: {
        fontSize: 22
      }
    },

    '& div p': {
      marginTop: 8,
      [max_md]: {
        fontSize: 14
      }
    },
    '& div span': {
      position: 'absolute',
      top: 6,
      display: 'block',
      fontSize: 36,
      [max_md]: {
        top: 8,
        fontSize: 34
      }
    }
  }
})
