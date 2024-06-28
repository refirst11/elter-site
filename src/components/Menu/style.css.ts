import { Style, media } from 'typedcssx'
const desktop = media('min-width: 800px')
const mobile = media('max-width: 799.98px')

export const styles = Style.create({
  Line: {
    zIndex: '4',
    position: 'fixed',
    top: 11,
    right: 16,
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '8px',
    '&:active': {
      background: 'var(--color-border)'
    },
    '& button': {
      zIndex: '4',
      position: 'relative',
      padding: '30px 12px 6px',
      border: 'none',
      outline: 'none',
      transitionDuration: '0.5s'
    },
    '& span': {
      position: 'relative',
      display: 'block',
      width: 18,
      height: 2,
      background: 'var(--color-text)',
      borderRadius: '8px',
      transformOrigin: 'center'
    },
    '& span:nth-of-type(1)': {
      bottom: 16
    },
    '& span:nth-of-type(2)': {
      bottom: 12
    },
    '& span:nth-of-type(3)': {
      bottom: 8
    },

    '& [aria-expanded="true"] span:nth-of-type(1)': {
      transition: 'transform 0.25s, translate 0.25s 0.25s, rotate 0.25s 0.25s',
      transform: 'translateY(6px)',
      translate: '4px 1.6px',
      rotate: '45deg'
    },
    '& [aria-expanded="true"] span:nth-of-type(2)': {
      opacity: 0,
      transitionDuration: '0.25s'
    },
    '& [aria-expanded="true"] span:nth-of-type(3)': {
      transition: 'transform 0.25s, translate 0.25s 0.25s, rotate 0.25s 0.25s',
      transform: 'translateY(-6px)',
      translate: '4px -1.6px',
      rotate: '-45deg'
    },
    '& [aria-expanded="false"] span:nth-of-type(1)': {
      transition: 'transform 0.25s 0.25s, translate 0.25s, rotate 0.25s',
      transform: 'translateY(0)',
      translate: '0 0',
      rotate: '0deg'
    },
    '& [aria-expanded="false"] span:nth-of-type(2)': {
      transition: 'opacity 0.35s 0.25s',
      opacity: 1
    },
    '& [aria-expanded="false"] span:nth-of-type(3)': {
      transition: 'transform 0.25s 0.25s, translate 0.25s, rotate 0.25s',
      transform: 'translateY(0)',
      translate: '0 0',
      rotate: '0deg'
    },
    ...desktop({
      display: 'none'
    })
  },
  menu: {
    display: 'block',
    '&[aria-hidden="true"] ul': {
      transform: 'translateY(-100%)'
    },

    '&[aria-hidden="false"] ul': {
      transform: 'translateY(0%)'
    },
    ...desktop({
      display: 'none'
    })
  },

  menu_list: {
    zIndex: '1',
    position: 'fixed',
    overflowY: 'auto',
    top: 64,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
    height: 'calc(100% - 64px)',
    margin: 'auto',
    padding: '20px',
    background: 'var(--color-bg)',
    borderBottom: 'solid 1px var(--color-border)',
    transition: 'transform 0.5s',
    '& li': {
      listStyleType: 'none'
    },
    '& a': {
      textDecoration: 'none',
      color: '#959595',
      display: 'block',
      width: '100%',
      height: 32,
      padding: '4px 8px',
      borderRadius: '4px'
    }
  },

  docs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 8px',
    height: 32,
    width: '100%'
  },

  activeDocs: {
    background: 'var(--color-card)',
    color: 'var(--color-sub)'
  },

  documentItems: {
    borderLeft: 'solid 1px var(--color-border)',
    marginLeft: 12,
    paddingLeft: 12,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    visibility: 'hidden',
    transition: 'all 0.2s'
  },

  headingItems: {
    borderLeft: 'solid 1px var(--color-border)',
    marginLeft: 12,
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    transition: 'all 0.2s'
  },

  visible: {
    opacity: 1,
    visibility: 'visible'
  },

  active: {
    "&[aria-current='false']:hover": {
      background: 'var(--color-card)',
      color: 'var(--color-sub)',
      transition: 'color 0.2s, background 0.2s'
    },
    "&[aria-current='page']": {
      fontWeight: 600,
      color: 'var(--color-link)',
      background: 'var(--color-list)'
    },
    "&[aria-current='false']": {
      background: 'transparent'
    }
  }
})
