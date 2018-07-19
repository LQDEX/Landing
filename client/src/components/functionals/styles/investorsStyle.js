import palette from './palette';

const {
  textHeader,
  globalBackground
  , txtHeaderFont
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
      margin: '0 0 40px 0',
      fontFamily: txtHeaderFont,
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: textHeader,
      minWidth: '100%'
    },
    '& .logosRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      minWidth: '100%',
      '& .investorLogo': {
        margin: '0px 20px 20px 25px',
        maxHeight: 80
      }
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
