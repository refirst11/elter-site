import { Scoped, media } from 'typedcssx';

const sm = media('300px <= 600px');

export const styles = Scoped.sheet({
  button_initialize: {
    zIndex: '1',
    position: 'relative',
    padding: '10px 20px',
    right: '36px',
    cursor: 'pointer',
    // background: 'pink',
    marginTop: '30px',
    display: 'inline-block',
  },
  container: {
    position: 'relative',
    width: '772px',
    margin: '0 auto',
  },
  wrapper: {
    position: 'relative',
    right: '40px',
    bottom: '15px',
  },
  copyButton: {
    zIndex: '1',
    position: 'relative',
    fontSize: '12px',
    marginLeft: 'auto',
    right: '46px',
    top: '80px',
    height: '30px',
    width: '30px',
    backgroundColor: 'rgb(245, 245, 253)',
    border: 'solid 1px rgb(220, 220, 220)',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '6px',
  },
  icon_position: {
    position: 'absolute',
    right: '5px',
    top: '5px',
  },
  noactive: {
    transition: 'all 0.2s',
    scale: '1.2',
  },
  active: {
    transition: 'all 0.2s',
  },
  visible: {
    opacity: '1',
  },
  hidden: {
    opacity: '0',
  },
});
