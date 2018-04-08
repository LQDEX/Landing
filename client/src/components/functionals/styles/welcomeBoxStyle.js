import palette from './palette';

const {
  primary,
  primaryHover,
  globalBackground,
  textHeader,
  text,
  txtHeaderFont,
  txtSubheaderFont,
  txtBlueBottonFont
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
        fontFamily: txtHeaderFont,
        fontSize: '78px',
        fontWeight: 'bold',
        color: textHeader
      },
      '& .txtBody': {
        fontFamily: txtSubheaderFont,
        fontSize: '40px',
        fontWeight: 'semibold',
        margin: '0 0 20px 0',
        color: text
      }
    }
  },
  mRoot: {
    extend: 'root',
    justifyContent: 'flex-start',
    '& .overlay': {
      extend: 'overlay',
      display: 'flex',
      flexDirection: 'column',
      '& .imageWrap': {
        extend: 'imageWrap',
        alignItems: 'center',
        margin: '30px 0 15px 0',
        '& .macBook': { maxWidth: '75%' }
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
        fontSize: '4em'
      },
      '& .txtBody': {
        extend: 'txtBody',
        margin: '0 0 10px 0',
        fontSize: '30px'
      },
      '& .btnSubscribe': {
        fontFamily: txtBlueBottonFont,
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
    '& .overlay': {
      extend: 'overlay',
      display: 'flex',
      flexDirection: 'column',
      '& .imageWrap': {
        extend: 'imageWrap',
        alignItems: 'center',
        '& .macBook': { maxWidth: '70%' }
      },
      '& .textArea': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80%'
      }
    }
  }
};
