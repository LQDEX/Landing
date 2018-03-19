import palette from './palette';

const {
  // Colors
  globalBackground,
  primary,
  primaryHover,
  textLight,
  textHeader,
  // Font Family
  txtBlueBottonFont,
  txtHeaderFont,
  txtInputs
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .signUpWrapper': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stertch',
      minWidth: '35%',
      margin: '50px 0 0 0',
      '& .closeWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& .btnClose': {
          fontFamily: txtBlueBottonFont,
          fontSize: '1em',
          fontWeight: 'semi-Bold',
          display: 'inline-block',
          boxSizing: 'content-box',
          cursor: 'pointer',
          border: 'none',
          background: 'transparent',
          color: primary,
          '&:hover': { color: primaryHover }
        }
      },
      '& .headerWrapper': {
        margin: '0 0 50px 0',
        '& .firstLine': {
          margin: '0 0 51px 10px',
          fontFamily: txtHeaderFont,
          fontSize: '48px',
          fontWeight: 'bold',
          color: textHeader
        }
      },
      '& .inputWraper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0 0 20px 0px',
        height: 50,
        minWidth: '100%',
        '& .inputIcon': {
          position: 'relative',
          left: 40,
          color: primary
        },
        '& .inputBox': {
          background: globalBackground,
          display: 'block',
          width: '91%',
          height: '100%',
          fontFamily: txtInputs,
          '& input': {
            margin: 0,
            height: '100%',
            width: '100%',
            fontSize: '16px',
            color: textLight,
            border: 'none',
            padding: '0 0 0 60px'
          }
        }
      }
    }
  }
};
