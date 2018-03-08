import palette from './palette';

const {
    white,
    textHeader,
    text,
    textHighlight,
    videoBackground
  } = palette,

  // shapeTop = 'polygon(75% 0, 100% 19%, 100% 84%, 1% 99%)';
  // shapeBottom = 'polygon(75% 0, 100% 48%, 50% 99%, 0 52%, 0 13%)';
  shapeBottom = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 52%, 50% 99%, 100% 48%, 75% 0, 0 13%)',
  shapeTop = 'polygon(0% 0%, 100% 0%, 100% 19%, 75% 0%, 0% 100%, 100% 82%, 100% 100%, 0% 100%)';

export default {
  root: {
    position: 'relative',
    background: videoBackground,
    '& .movingLines': {
      maxWidth: '100%',
      filter: 'opacity(80%)'
    },
    '& .infoRow': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      position: 'relative',
      minWidth: '100%',
      maxHeight: 535,
      overflow: 'hidden',
      '& .overlay': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0
      },
      '& .textBlockLeft': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: white,
        padding: '0 2% 0% 7%'
      },
      '& .imgBlockTop': {
        position: 'relative',
        maxHeight: 535,
        display: 'flex',
        '& .textRiskFreeWrap': {
          position: 'absolute',
          top: '39%',
          left: '53%',
          display: 'flex',
          felxDirection: 'row',
          alignItems: 'center',
          opacity: 1
        },
        '& .textSecureWrap': {
          position: 'absolute',
          top: '54%',
          left: '77%',
          display: 'flex',
          felxDirection: 'row',
          alignItems: 'center',
          opacity: 1

        },
        '& .innerText': {
          margin: '0 0 0 10px',
          fontFamily: 'Khand',
          fontSize: 24,
          color: text

        },
        '& .topWindow': {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: white,
          '-webkit-clip-path': shapeTop,
          clipPath: shapeTop
        }
      },
      '& .textBlockRight': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: white,
        width: '100%',
        padding: '0 2% 0 7%',
        textAlign: 'right'
      },
      '& .imgBlockBottom': {
        position: 'relative',
        maxHeight: 543,
        '& .bottomWindow': {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: white,
          '-webkit-clip-path': shapeBottom,
          clipPath: shapeBottom
        }
      },
      '& .firstLine': {
        margin: '0 0 51px 0',
        fontFamily: 'Khand',
        fontSize: '48px',
        fontWeight: 'bold',

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
  }
};
