import palette from './palette';

const {
  globalBackground,
  primary,
  primaryHover,
  txtBlueBottonFont
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0 100px 0',
    '& .btnSubscribe': {
      fontFamily: txtBlueBottonFont,
      fontSize: '1em',
      fontWeight: 'semi-Bold',
      display: 'inline-block',
      padding: '1em 1.25em',
      boxSizing: 'content-box',
      cursor: 'pointer',
      border: 'none',
      background: primary,
      color: globalBackground,
      '&:hover': { background: primaryHover }
    }
  }
};
