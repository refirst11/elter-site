import { Scoped, media } from 'typedcssx';

export const styles = Scoped.sheet({
  container: {
    zIndex: '2',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    height: '64px',
    borderBottom: 'solid 1px #eaeaea',
    background: 'rgb(247, 247, 247)',
  },

  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    top: '20px',
    left: '400px',
    listStyleType: 'none',
    listStylePosition: 'inside',
  },
  link: {
    fontSize: '14px',
    textDecoration: 'none',
  },
  active: {
    color: '#333',
    fontWeight: '500',
  },
  noactive: {
    color: '#4b5563',
  },
});

export default Scoped.global({
  body: {
    margin: 'auto',
    textAlign: 'center',
    lineHeight: '150%',
    color: '#4b5563',
    background: 'rgb(247, 247, 247)',
  },
  main: {
    width: '928px',
    padding: '16px 48px',
    margin: '0 auto',
    textAlign: 'left',
    minHeight: '100vh',
  },

  a: {
    color: '#006BE6',
  },
  p: {
    margin: '28px 0 0',
    fontWeight: '330',
  },
  button: {
    border: 'none',
    outline: 'none',
    background: 'none',
  },
  h1: {
    color: 'rgb(70, 86, 86)',
    margin: '80px 0',
    fontWeight: '600',
  },
  h2: {
    color: 'rgb(70, 86, 86)',
    fontSize: '30px',
    fontWeight: '550',
    margin: '44px 0 0',
    height: '50px',
    paddingBottom: '4px',
    borderBottom: 'solid 1px #eaeaea',
  },
  h3: {
    color: 'rgb(70, 86, 86)',
    fontSize: '24px',
    fontWeight: '550',
    margin: '36px 0 0',
  },
  strong: {
    fontWeight: '600',
  },
  '*': {
    boxSizing: 'border-box',
  },
});
