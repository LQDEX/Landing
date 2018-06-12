import palette from './palette';

const {
  up,
  down,
  greyDark,
  primary,
  primaryHover,
  globalBackground,
  textLight,
  txtInputs,
  shadowSoft,
  txtCaptionFont,
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
      margin: '30px 0 0 0',
      padding: '0px 0',
      background: globalBackground,
      boxShadow: `0px 2px 10px 0px ${shadowSoft}`,
      '& .inputWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0 0 0px 0px',
        height: 50,
        '& .inputBox': {
          position: 'relative',
          padding: '0 0 0 10px',
          margin: 0,
          width: '100%',
          height: '100%',
          '& input': {
            margin: 0,
            height: '100%',
            width: '100%',
            fontFamily: txtCaptionFont,
            fontSize: '16px',
            color: greyDark,
            border: 'none',
            background: 'transparent',
            '&:focus': { outline: 'none'},
            '&::placeholder': { color: textLight, opacity: 1 }, /* Firefox, Chrome,...*/
            '&:-ms-input-placeholder': { color: textLight, opacity: 1 }, /* Internet Explorer 10-11 */
            '&::-ms-input-placeholder': { color: textLight, opacity: 1 } /* Microsoft Edge */
          }
        },
        '& .btnSubscribe': {
          fontFamily: txtCaptionFont,
          fontSize: '16px',
          fontWeight: '500',
          // display: 'inline-block',
          width: '35%',
          height: 50,
          // boxSizing: 'content-box',
          cursor: 'pointer',
          outline: 'none',
          border: `1px solid ${primary}`,
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
      color: down,
      '& .successLabel': {
        color: primary
      }
    }
  },
  mRoot: {
    extend: 'root',
  },
  tRoot: {
    extend: 'root',
  }
};
