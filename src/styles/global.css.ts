import { Style } from 'typedcssx'

Style.global({
  body: {
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.75,
    color: 'var(--color-text)',
    background: 'var(--color-bg)'
  },
  main: {
    position: 'relative',
    top: 24,
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
    margin: '20px 0',
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
    top: 12,
    fontSize: '22px',
    fontWeight: '500',
    margin: '0 auto'
  },
  'ul li p': {
    marginTop: 12
  },
  '*': {
    boxSizing: 'border-box'
  },
  'h1::after, h2::after, h3::after, h4::after, h5::after, h6::after': {
    content: '"#"',
    position: 'relative',
    left: 8,
    opacity: 0,
    color: 'var(--color-heading)',
    transition: 'all 0.2s'
  },
  'h1:hover::after, h2:hover::after, h3:hover::after, h4:hover::after, h5:hover::after, h6:hover::after': {
    opacity: 0.2
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
    '--color-accent': 'rgb(206 206 206)',
    '--color-bg2': 'rgb(56 56 56)',
    '--color-bg3': 'rgb(66 66 66)',
    '--color-text2': 'rgb(206 206 206)',
    '--color-logo2': 'rgb(80 200 180)',
    '--color-border2': 'rgba(200, 200, 200, 0.2)'
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
    '--color-accent': 'rgb(70, 86, 86)',
    '--color-bg2': '#4b5563',
    '--color-bg3': 'rgb(95 105 119)',
    '--color-text2': 'rgb(255, 255, 255)',
    '--color-logo2': 'rgb(40 145 120) ',
    '--color-border2': 'rgba(200, 200, 200, 0.2)'
  }
})
