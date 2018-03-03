import palette from './palette';

const { textHeader } = palette;

export default {
  root: {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0 100px 0',
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
      '& .investorLogo': { margin: '20px 0' }
    }
  }
};
