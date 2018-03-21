import palette from './palette';

const {
    globalBackground,
    textHeader,
    text,
    textHighlight,
    txtHeaderFont,
    txtBodyFont
  } = palette,

  dShapeBottom = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 52%, 50% 99%, 100% 48%, 75% 0, 0 13%)',
  dShapeTop = 'polygon(0% 0%, 100% 0%, 100% 19%, 75% 0%, 0% 100%, 100% 82%, 100% 100%, 0% 100%)',
  mShapeBottom = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 40%, 50% 99%, 100% 60%, 100% 15%, 90% 0, 0 13%)',
  mShapeTop = 'polygon(0% 0%, 100% 0%, 100% 10%, 65% 0%, 0% 65%, 0% 100% , 100% 90%, 100% 100%, 0% 100%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    position: 'relative',
    minWidth: '100%',
    borderTop: `100px solid ${globalBackground}`,
    borderBottom: `100px solid ${globalBackground}`,
    '& .infoRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      position: 'relative',
      minWidth: '100%',
      overflow: 'hidden',

      '& .textBlockLeft': {
        flex: '2 0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        lineHeight: '2em',
        backgroundColor: globalBackground,
        padding: '0 2% 0% 7%'
      },
      '& .imgBlockTop': {
        felx: '1 0 auto',
        position: 'relative',
        display: 'flex',
        '& .topWindow': {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: globalBackground,
          '-webkit-clip-path': dShapeTop,
          clipPath: dShapeTop
        }
      },
      '& .textBlockRight': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: globalBackground,
        width: '100%',
        padding: '0 2% 0 7%',
        textAlign: 'right',
        lineHeight: '2em'
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
          backgroundColor: globalBackground,
          '-webkit-clip-path': dShapeBottom,
          clipPath: dShapeBottom
        }
      },
      '& .firstLine': {
        margin: '0 0 51px 0',
        fontFamily: txtHeaderFont,
        fontSize: '48px',
        fontWeight: 'bold',

        color: textHeader
      },
      '& .txtBody': {
        fontFamily: txtBodyFont,
        fontSize: '20px',
        fontWeight: 'normal',
        maxWidth: '660px',
        color: text
      },
      '& .txtHighlight': {
        extend: 'txtBody',
        color: textHighlight,
        fontWeight: 'bold'
      },
      '& .traslucent80': { filter: 'opacity(80%)' }
    }
  },
  mRoot: {
    extend: 'root',
    '& .infoRow': {
      extend: 'infoRow',
      flexDirection: 'column',
      maxHeight: 1000,
      '& .textBlockLeft': {
        extend: 'textBlockLeft',
        borderTop: `50px solid ${globalBackground}`,
        borderBottom: `50px solid ${globalBackground}`,
        padding: '10%'
      },
      '& .textBlockRight': {
        extend: 'textBlockRight',
        borderTop: `20px solid ${globalBackground}`,
        borderBottom: `50px solid ${globalBackground}`,
        width: '91%',
        padding: '0 7% 0 2%'
      },
      '& .imgBlockTop': {
        extend: 'imgBlockTop',
        '& .topWindow': {
          extend: 'topWindow',
          '-webkit-clip-path': mShapeTop,
          clipPath: mShapeTop
        }
        // '& .textRiskFreeWrap': {
        //   extend: 'textRiskFreeWrap',
        //   top: '25%',
        //   left: '60%'
        // },
        // '& .textSecureWrap': {
        //   extend: 'textSecureWrap',
        //   top: '54%',
        //   left: '43%'
        // }
      },
      '& .imgBlockBottom': {
        extend: 'imgBlockBottom',
        maxHeight: 450,
        '& .bottomWindow': {
          extend: 'bottomWindow',
          '-webkit-clip-path': mShapeBottom,
          clipPath: mShapeBottom
        }
      },
      '& .firstLine': {
        extend: txtHeaderFont,
        fontSize: '38px'
      }
    }
  },
  tRoot: {
    extend: 'root',
    '& .infoRow': {
      extend: 'infoRow',
      borderTop: `100px solid ${globalBackground}`
    }
  }
};
