import { Scoped, media } from 'typedcssx';

export const styles = Scoped.sheet({
  footer_container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '44px',
    margin: '0 280px',
  },
  footer_main: {
    position: 'relative',
    bottom: '0px',
    left: '0px',
    right: '0px',
    padding: '48px 24px',
    background: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '140px',
  },
});
