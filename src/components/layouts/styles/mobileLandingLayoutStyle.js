import palette from './palette';

const {
  primary,
  grey,
  globalBackground,
  videoBackground
} = palette;

export default {
  root: {
    overflowX: 'hidden',
    '& .movingLines': {
      position: 'fixed',
      top: 0,
      left: 0,
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
      width: '75%',
      position: 'fixed',
      zIndex: 10000,
      top: 0,
      right: 0,
      backgroundColor: globalBackground,
      paddingTop: '80px',
      overflowX: 'hidden',
      boxShadow: `0px 2px 20px 0px ${grey}`,
      transition: '0.5s',
      '& .menuButton': {
        position: 'absolute',
        top: 15,
        right: 25,
        marginLeft: '50px',
        border: 'none',
        background: 'none',
        color: primary
      },
      '& a': {
        padding: '8px 8px 8px 32px',
        textDecoration: 'none',
        fontSize: '25px',
        color: '#818181',
        display: 'block',
        transition: '0.3s'
      }
    }
  }
};
