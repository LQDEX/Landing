import palette from './palette';

const { primary, textHeader, text, grey } = palette;

// shape = 'polygon(100% 0, 100% 96%, 67% 84%, 0 100%, 0 0)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .firstLine': {
      margin: '0 0 51px 0',
      fontFamily: 'Khand',
      fontSize: '48px',
      fontWeight: 'bold',
      color: textHeader
    },
    '& .teamRow': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 0 100px 0'
    },
    '&  .teamCard': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '&  .advisorCard': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px'
    },
    '& .mateName': {
      fontFamily: 'Khand',
      color: primary,
      margin: '0 0 5px 0'

    },
    '& .mateTitle': {
      fontFamily: 'Exo',
      fontWeight: 'semibold',
      color: grey
    },
    '& .mateBrief': {
      fontFamily: 'Arsenal',
      fontWeight: 'semibold',
      textAlign: 'center',
      padding: '0 30px',
      color: text,
      margin: '7px 0 0 0'
    }
  }
};
