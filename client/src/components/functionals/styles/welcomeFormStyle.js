import palette from './palette';

const {
  greyDark,
  primary,
  primaryHover,
  globalBackground,
  textHeader,
  text,
  textLight,
  txtInputs,
  txtCaptionFont,
  txtHeaderFont,
  txtSubheaderFont,
  txtBlueBottonFont,
  shadowSoft
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: '2% 0 0 0',
    fontFamily: txtInputs,
    color: 'red',
    '& .formWrap': {
      // position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: '5px',
      background: globalBackground,
      '& .inputWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0 0 0px 0px',
        height: 40,
        '& .inputBox': {
          position: 'relative',
          padding: '0 0 0 10px',
          margin: 0,
          // display: 'block',
          width: '100%',
          height: '100%',
          fontFamily: txtInputs,
          '& input': {
            margin: 0,
            height: '100%',
            width: '100%',
            fontSize: '16px',
            color: greyDark,
            border: 'none',
            background: 'transparent',
            '&::placeholder': { color: textLight, opacity: 1 }, /* Firefox, Chrome,...*/
            '&:-ms-input-placeholder': { color: textLight, opacity: 1 }, /* Internet Explorer 10-11 */
            '&::-ms-input-placeholder': { color: textLight, opacity: 1 } /* Microsoft Edge */
          }
        },
        '& .btnSubscribe': {
          fontFamily: txtBlueBottonFont,
          fontSize: '16px',
          fontWeight: '500',
          display: 'inline-block',
          width: '35%',
          height: '100%',
          boxSizing: 'content-box',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
          background: primary,
          color: globalBackground,
          '&:hover': { background: primaryHover },
          '&:disabled': { background: shadowSoft, cursor: 'not-allowed' }
        },
      },
    },
    '& .errorLabel':{
      margin: '10px 0',
      padding: '0 10px',
    }
  },
  mRoot: {
    extend: 'root',
  },
  tRoot: {
    extend: 'root',
  }
};
