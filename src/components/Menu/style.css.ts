import { Style, media } from 'typedcssx'
const desktop = media('min-width: 800px')

export const styles = Style.create({
  Line: {
    zIndex: '4',
    position: 'fixed',
    top: 12,
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
  }
})
