import palette from './palette';

const {
  primary,
  primaryHover,
  globalBackground,
  grey,
  textHeader,
  txtHeaderFont,
  txtBlueBottonFont
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0 80px 0',
    background: globalBackground,
    '& .firstLine': {
      margin: '0 0 30px 0',
      fontFamily: txtHeaderFont,
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: textHeader,
      minWidth: '100%'
    },
    '& .btnSubscribe': {
      fontFamily: txtBlueBottonFont,
      fontSize: '1em',
      fontWeight: 'semi-Bold',
      display: 'inline-block',
      padding: '1em 3.5em',
      margin: '0 0 70px 0',
      boxSizing: 'content-box',
      cursor: 'pointer',
      border: 'none',
      background: primary,
      color: globalBackground,
      '&:hover': { background: primaryHover }
    },
    '& .copyRights': {

      fontFamily: txtBlueBottonFont,
      fontSize: 14,
      fontWeight: 400,
      display: 'inline-block',
      boxSizing: 'content-box',
      color: grey,
      '& .em': {
        padding: '0',
        textDecoration: 'none',
        fontSize: '14px'
      }
    }
  },
  mRoot: {
    extend: 'root',
    '& .firstLine': {
      extend: 'firstLine',
      fontSize: '38px'
    }
  }
};
