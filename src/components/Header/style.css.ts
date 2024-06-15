import { Style, media } from 'typedcssx'

export const styles = Style.create({
  container: {
    zIndex: '2',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    height: '64px',
    borderBottom: 'solid 1px var(--color-border)',
    background: 'var(--color-bg)'
  },

  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    top: '20px',
    left: '400px',
    height: '0',
    listStyleType: 'none',
    listStylePosition: 'inside'
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none'
  },
  active: {
    color: 'var(--color-heading)',
    fontWeight: '550'
  },
  noactive: {
    color: 'var(--color-heading)',
    fontWeight: '300'
  }
})

export default Style.global({
  body: {
    margin: 'auto',
    textAlign: 'center',
    lineHeight: '150%',
    color: 'var(--color-text)', // #4b5563
    background: 'var(--color-bg)' // rgb(247, 247, 247)
  },
  main: {
    width: '928px',
    padding: '16px 48px',
    margin: '0 auto',
    textAlign: 'left',
    minHeight: '100vh'
  },

  li: {
    textAlign: 'left'
  },
  a: {
    color: 'var(--color-link)',
    fontWeight: '330'
  },
  p: {
    margin: '28px 0 0',
    fontWeight: '330'
  },
  button: {
    border: 'none',
    outline: 'none',
    background: 'none'
  },
  h1: {
    color: 'var(--color-heading)',
    padding: '20px 0',
    margin: '80px 0',
    fontWeight: '600'
  },
  h2: {
    color: 'var(--color-heading)',
    fontSize: '30px',
    fontWeight: '550',
    margin: '44px 0 0',
    height: '50px',
    paddingBottom: '4px',
    borderBottom: 'solid 1px var(--color-border)'
  },
  h3: {
    color: 'var(--color-heading)',
    fontSize: '24px',
    fontWeight: '550',
    margin: '36px 0 0'
  },
  h4: {
    position: 'relative',
    top: 12,
    fontSize: '22px',
    fontWeight: '500',
    margin: '0 auto'
  },
  strong: {
    fontWeight: '600'
  },
  '*': {
    boxSizing: 'border-box'
  }
})

Style.root({
  "&[data-theme='dark']": {
    '--color-text': 'rgb(180 180 190)',
    '--color-bg': 'rgb(42 43 43)',
    '--color-heading': 'rgb(230, 255, 247)',
    '--color-border': 'rgba(30, 30, 30, 0.43)',
    '--color-link': 'rgb(100 200 200)',
    '--color-list': 'rgba(80, 87, 80, 0.3)',
    '--color-sub': 'rgb(220 220 220)',
    '--color-card': 'rgba(33, 33, 33, 0.3)',
    '--color-logo': 'rgb(100 220 200)',
    '--color-accent': 'rgb(206 206 206)'
  },

  "&[data-theme='light']": {
    '--color-text': '#4b5563',
    '--color-bg': 'rgb(255, 255, 255)',
    '--color-heading': 'rgb(70, 86, 86)',
    '--color-border': '#eaeaea',
    '--color-link': 'rgb(60, 135, 232)',
    '--color-list': '#e0efff',
    '--color-sub': '#222',
    '--color-card': 'rgb(245 245 245)',
    '--color-logo': 'rgb(60 165 140) ',
    '--color-accent': 'rgb(70, 86, 86)'
  }
})
