import palette from './palette';

const {
    primary,
    primaryHover,
    globalBackground,
    textHeader,
    text,
    headerFont
  } = palette,

  dShape = 'polygon(0 100%, 67% 84%, 100% 100%)',
  mShape = 'polygon(0 100%, 77% 94%, 100% 98%, 100% 100%)',
  tShape = 'polygon(0 100%, 90% 90%, 100% 94%, 100% 100%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .imgClip': {
      background: globalBackground,
      width: '100%',
      '-webkit-clip-path': dShape,
      clipPath: dShape
    },
    '& .overlay': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
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
        fontFamily: headerFont,
        fontSize: '48px',
        fontWeight: 'bold',
        color: textHeader
      },
      '& .txtBody': {
        fontFamily: headerFont,
        fontSize: '40px',
        fontWeight: 'semibold',
        color: text
      }
    }
  },
  mRoot: {
    extend: 'root',
    justifyContent: 'flex-start',
    '& .imgClip': {
      '-webkit-clip-path': mShape,
      clipPath: mShape
    },
    '& .overlay': {
      extend: 'overlay',
      '& .imageWrap': {
        extend: 'imageWrap',
        alignItems: 'center',
        margin: '0 0 30px 0',
        '& .macBook': { maxWidth: '80%' }
      },
      '& .textArea': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80%'
      },
      '& .firstLine': {
        extend: 'firstLine',
        margin: '30px 0 30px 0',
        fontSize: '38px'
      },
      '& .txtBody': {
        extend: 'txtBody',
        margin: '0 0 10px 0',
        fontSize: '30px'
      },
      '& .btnSubscribe': {
        fontFamily: 'Roboto',
        fontSize: '1em',
        fontWeight: 'semi-Bold',
        display: 'inline-block',
        margin: 20,
        padding: '1em 1.25em',
        boxSizing: 'content-box',
        cursor: 'pointer',
        border: 'none',
        background: primary,
        color: globalBackground,
        '&:hover': { background: primaryHover }
      }
    }
  },
  tRoot: {
    extend: 'root',
    '& .imgClip': {
      '-webkit-clip-path': tShape,
      clipPath: tShape
    }
  }
};
