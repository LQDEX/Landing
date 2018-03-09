import palette from './palette';

const {
  videoBackground
  // textHeader,
  // text
} = palette;


export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .wrapper': {
      background: videoBackground,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      overflowX: 'hidden',
      // The original design
      // This value is for hide the horizontal scroll bar
      width: '80%',
      // width: '99vw',

      '& .movingLines': {
        objectFit: 'cover',
        minHeight: '100%',
        filter: 'opacity(80%)'
      }
    }

  }
};
