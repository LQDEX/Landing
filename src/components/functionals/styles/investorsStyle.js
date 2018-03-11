import palette from './palette';

const {
  textHeader,
  globalBackground
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0 100px 0',
    background: globalBackground,

    '& .firstLine': {
      margin: '0 0 80px 0',
      fontFamily: 'Khand',
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: textHeader,
      minWidth: '100%'
    },
    '& .logosRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexWrap: 'wrap',
      minWidth: '100%',
      '& .investorLogo': { margin: '25px 20px' }
    }
  },
  mRoot: {
    extend: 'root',
    '& .firstLine': {
      extend: 'firstLine',
      fontSize: '38px'
    }
  }
};
