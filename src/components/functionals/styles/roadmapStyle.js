import palette from './palette';

// const { videoBackground, textHeader, text } = palette,
const {
    textHeader,
    globalBackground
  } = palette,
  mShape = 'polygon(20% 7%, 100% 0%, 100% 99%, 65% 95%, 0 99%, 0 5%)',
  shape = 'polygon(29% 18%, 100% 0, 100% 99%, 65% 86%, 0 96%, 0 10%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: globalBackground,

    '& .imgClip': {
      width: '100%',
      '-webkit-clip-path': shape,
      clipPath: shape
    },
    '& .overlay': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      minWidth: '100%',
      overflow: 'hidden',
      '& .firstLine': {
        margin: '0 0 40px 0',
        fontFamily: 'Khand',
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
        Sborder: '1px solid red',
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
        fontFamily: 'Exo',
        fontSize: 16,
        color: globalBackground

      },
      '& .arsenal': {
        fontFamily: 'Arsenal',
        fontWeight: 'bold',
        fontSize: 20,
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
    '& .imgClip': {
      extend: 'imgClip',
      maxHeight: 800,
      '-webkit-clip-path': mShape,
      clipPath: mShape
    },
    '& .overlay': {
      extend: 'overlay',
      '& .firstLine': {
        extend: 'firstLine',
        fontSize: '38px'
      }
    }
  }
};
