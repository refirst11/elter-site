import cssx, { max_md } from 'typedcssx'

export const css = cssx.create({
  top_wrapper: {
    [max_md]: {
      height: '1460px',
      left: -240
    }
  },
  link_wrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: 50,
    top: -120,
    right: 520
  },
  link_color1: {
    fontSize: 14,
    background: 'var(--color-logo2)',
    color: 'var(--color-bg)',
    hover: {
      background: 'var(--color-logo)'
    },
    [max_md]: {
      fontSize: 12
    }
  },

  link_color2: {
    fontSize: 14,
    background: 'var(--color-bg2)',
    color: 'var(--color-text2)',
    hover: {
      background: 'var(--color-bg3)'
    },
    [max_md]: {
      fontSize: 12
    }
  },
  link: {
    width: 116.36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    height: '40px',
    padding: '12px 20px',
    fontWeight: '500',
    borderRadius: '20px',
    textDecoration: 'none',
    [max_md]: {
      width: 97.26,
      height: 34.52,
      position: 'relative',
      top: '-340px',
      right: '-490px'
    }
  },
  Logo: {
    position: 'absolute',
    fontFamily: 'var(--Inter)',
    display: 'flex',
    alignItems: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    top: -250,
    marginRight: 4,
    height: '75px',
    gap: 29,
    color: 'var(--color-logo)',
    [max_md]: {
      fontSize: 38,
      top: -580
    }
  },

  desp: {
    position: 'absolute',
    fontFamily: 'var(--Inter)',
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: 'var(--color-desc)',
    top: -195,
    height: '75px',
    gap: 29,
    [max_md]: {
      whiteSpace: 'nowrap',
      top: -530,
      fontSize: 12.8
    }
  },
  left_icon: {
    filter: 'var(--color-filter)',
    position: 'relative',
    top: 8
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
      top: -390,
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
      whiteSpace: 'nowrap',
      top: -332,
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
