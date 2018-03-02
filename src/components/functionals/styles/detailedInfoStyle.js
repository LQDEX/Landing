import palette from './palette';

const { textHeader, text, textHighlight, videoBackground } = palette,

  shapeBottom = 'polygon(75% 0, 100% 48%, 50% 100%, 0 52%, 0 13%)',
  shapeTop = 'polygon(75% 0, 100% 19%, 100% 84%, 0% 100%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // border: '1px solid red',
    '& .infoRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '100%'
    },
    '& .textBlockLeft': { margin: '0 0 0 7%' },
    '& .textBlockRight': {
      textAlign: 'right',
      margin: '0 2% 0 6%'
    },
    '& .imgBlockTop': {
      background: videoBackground,
      clipPath: shapeTop
    },
    '& .imgBlockBottom': {
      background: videoBackground,
      clipPath: shapeBottom
    },
    '& .firstLine': {
      margin: '0 0 51px 0',
      fontFamily: 'Khand',
      fontSize: '48px',
      fontWeight: 'bold',
      letterSpacing: '-1px',
      color: textHeader
    },
    '& .txtBody': {
      fontFamily: 'Arsenal',
      fontSize: '20px',
      fontWeight: 'normal',
      color: text
    },
    '& .txtHighlight': {
      extend: 'txtBody',
      color: textHighlight,
      fontWeight: 'bold'
    },
    '& .traslucent80': { filter: 'opacity(80%)' }

  }
};
