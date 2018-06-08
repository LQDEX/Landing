import palette from './palette';

const {
  primary,
  primaryHover,
  globalBackground,
  text,
  txtBlueBottonFont,
  txtBodyFont
} = palette;

export default {
  root: {
    zIndex: 10000,
    '& .modal': {
      position: 'fixed',
      top: 0,
      left: 0,
      width:'100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.6)',
    },
    '& .modal-main': {
      position: 'fixed',
      background: globalBackground,
      width: '40%',
      height: 'auto',
      minHeight: 105,
      top:'30%',
      left:'50%',
      transform: 'translate(-50%,-50%)',
      '& .btnClose': {
        fontFamily: txtBodyFont,
        fontSize: '1em',
        fontWeight: 'semi-Bold',
        textAlign: 'right',
        display: 'inline-block',
        boxSizing: 'content-box',
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        width: '99%',
        padding: '5px 0 0 0',
        color: primary,
        '&:hover': { color: primaryHover }
      }
    },
    '& .modalBody': {
      fontFamily: txtBlueBottonFont,
      color: text,
      margin: '20px',
    },
    '& .display-block': {
      display: 'block'
    },
    '& .display-none': {
      display: 'none'
    },
  }
};
