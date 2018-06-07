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
    border: '1px solid cyan',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '& .formWrap': {
      border: '1px solid orange',
      // position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
      '& .inputWrapper': {
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0 0 0px 0px',
        height: 45,
        minWidth: '100%',
        '& .inputBox': {
          border: '1px solid green',
          position: 'relative',
          padding: '0 0 0 10px',
          margin: 0,
          // display: 'block',
          width: '100%',
          height: '100%',
          background: 'red',
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
          padding: '1em 0',
          width: '47%',
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
      border: '1px solid brown',
margin: '5px 0',
    }
  },
  mRoot: {
    extend: 'root',
  },
  tRoot: {
    extend: 'root',
  }
};
