import palette from './palette';

const {
  primary,
  primaryHover,
  globalBackground,
  textHeader,
  text,
  txtCaptionFont,
  txtHeaderFont,
  txtSubheaderFont,
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .overlay': {
      // border: '1px solid red',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'strech',
      minWidth: '100%',
      margin: '80px 0 0 0',
      '& .imageWrap': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& .macBook': { maxWidth: '100%' }
      },
      '& .textWrap':{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& .textArea': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          margin:'0px 0 0 0',
          //minHeight: '70%'
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
        },
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
      margin: '0 0 0 0',
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
        margin: '0px 0 30px 0',
        fontSize: '4em'
      },
      '& .txtBody': {
        extend: 'txtBody',
        margin: '0 0 10px 0',
        fontSize: '30px'
      },
      '& .btnWhitepaper': {
        fontFamily: txtCaptionFont,
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
        '&:hover': { background: primaryHover },
        '& .btnLink': {
          color: globalBackground,
          textDecoration: 'none'         
        }
      },
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
