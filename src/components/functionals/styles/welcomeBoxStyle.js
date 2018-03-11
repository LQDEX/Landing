import palette from './palette';

const {
    globalBackground,
    textHeader,
    text
  } = palette,

  shape = 'polygon(0 100%, 67% 84%, 100% 100%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .imgClip': {
      background: globalBackground,
      width: '100%',
      '-webkit-clip-path': shape,
      clipPath: shape
    },
    '& .overlay': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      minWidth: '100%',
      '& .imageWrap': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& .macBook': { maxWidth: '100%' }
      },
      '& .textArea': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        minHeight: '80%'
      },
      '& .firstLine': {
        margin: '0 0 51px 0',
        fontFamily: 'Khand',
        fontSize: '48px',
        fontWeight: 'bold',

        color: textHeader
      },
      '& .txtBody': {
        fontFamily: 'Khand',
        fontSize: '40px',
        fontWeight: 'semibold',
        color: text
      }
    }
  }
};
