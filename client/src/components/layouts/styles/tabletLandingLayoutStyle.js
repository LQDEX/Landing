import palette from './palette';

const { videoBackground } = palette;

export default {
  root: {
    overflowX: 'hidden',
    '& .movingLines': {
      position: 'fixed',
      top: 0,
      left: 0,
      height:'120%',
      zIndex: -2
    },
    '& .bkTone': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: videoBackground,
      opacity: 0.2,
      zIndex: -1
    },
    '& .sideNav': {
      height: '100%',
      width: '50%',
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      backgroundColor: '#111',
      overflowX: 'hidden',
      paddingTop: '60px',
      transition: '0.5s'
    }
  }
};
