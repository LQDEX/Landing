// import palette from './palette';

// const primary = palette.primary;


export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',


    '& .wrapper': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      overflowX: 'hidden',
      // This value is for hide the horizontal scroll bar
      width: '100.9%'
      // width: '80%' // The original design
    }
  }
};
