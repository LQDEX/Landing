import palette from './palette';

const {
  // Colors
  globalBackground,
  primary,
  primaryHover,
  secondaryHover,
  textLight,
  textHeader,
  greyDark,
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
      '& .headerWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '0 0 50px 0',
        '& .firstLine': {
          fontFamily: txtHeaderFont,
          fontSize: '48px',
          fontWeight: 'bold',
          color: textHeader
        },
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
      '& .fieldWrapper': { color: 'red', fontFamily: txtInputs },
      '& .inputWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0 0 20px 0px',
        height: 50,
        minWidth: '100%',
        '& .inputIcon': {
          position: 'relative',
          left: 28,
          color: primary,
          zIndex: 100
        },
        '& .inputBox': {
          position: 'relative',
          left: -17,
          background: globalBackground,
          margin: 0,
          // display: 'block',
          width: '91%',
          height: '100%',
          fontFamily: txtInputs,
          '& input': {
            margin: 0,
            height: '100%',
            width: '100%',
            fontSize: '16px',
            color: greyDark,
            border: 'none',
            padding: '0 0 0 60px',
            '&::placeholder': { color: textLight, opacity: 1 }, /* Firefox, Chrome,...*/
            '&:-ms-input-placeholder': { color: textLight, opacity: 1 }, /* Internet Explorer 10-11 */
            '&::-ms-input-placeholder': { color: textLight, opacity: 1 } /* Microsoft Edge */
          }
        }
      },
      '& .buttonsWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 0 0 0px',
        '& .btnSubscribe': {
          fontFamily: txtBlueBottonFont,
          fontSize: '16px',
          fontWeight: '500',
          display: 'inline-block',
          padding: '1em 0',
          width: '47%',
          boxSizing: 'content-box',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
          background: primary,
          color: globalBackground,
          '&:hover': { background: primaryHover }
        },
        '& .btnCancel': {
          fontFamily: txtBlueBottonFont,
          fontSize: '16px',
          fontWeight: '500',
          display: 'inline-block',
          padding: '1em 0',
          width: '47%',
          boxSizing: 'content-box',
          cursor: 'pointer',
          border: `1px solid ${greyDark}`,
          outline: 'none',
          background: 'none',
          color: greyDark,
          '&:hover': {
            background: secondaryHover,
            color: globalBackground,
            border: `1px solid ${secondaryHover}`
          }
        }
      }
    }
  }
};
