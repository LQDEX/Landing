import palette from './palette';

// const { videoBackground, textHeader, text } = palette,
const {
  textHeader,
  globalBackground,
  txtHeaderFont,
  txtBodyFont,
  txtCaptionFont
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: globalBackground,

    '& .overlay': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      minWidth: '100%',
      overflow: 'hidden',
      '& .firstLine': {
        margin: '0 0 80px 0',
        fontFamily: txtHeaderFont,
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: textHeader,
        minWidth: '100%'
      },
      '& .roadmapRow': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& .roadmapLine': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minWidth: '100%'
      },
      '& .right': {
        minWidth: '50%',
        padding: '0 1% 0 0',
        textAlign: 'right'

      },
      '& .left': {
        minWidth: '50%',
        padding: '0 0 0 1%'
      },
      '& .exo': {
        fontFamily: txtCaptionFont,
        fontWeight: '500',
        fontSize: 16,
        color: globalBackground

      },
      '& .arsenal': {
        fontFamily: txtBodyFont,
        fontWeight: 'bold',
        fontSize: 26,
        color: globalBackground
      },
      '& .vLine': {
        position: 'relative',
        top: 2
      }
    }
  },
  mRoot: {
    extend: 'root',
    borderBottom: `50px solid ${globalBackground}`,
    '& .overlay': {
      extend: 'overlay',
      '& .firstLine': {
        extend: 'firstLine',
        fontSize: '38px'
      }
    }
  },
  tRoot: { extend: 'root' }
};
