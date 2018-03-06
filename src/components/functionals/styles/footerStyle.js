import palette from './palette';

const {
  primary,
  primaryHover,
  globalBackground,
  grey,
  textHeader
} = palette;

export default {
  root: {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0 100px 0',
    '& .firstLine': {
      margin: '0 0 30px 0',
      fontFamily: 'Khand',
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: textHeader,
      minWidth: '100%'
    },
    '& .btnSubscribe': {
      fontFamily: 'Roboto',
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
      fontFamily: 'Roboto',
      fontSize: '0.9em',
      fontWeight: 'semi-Bold',
      display: 'inline-block',
      boxSizing: 'content-box',
      cursor: 'pointer',
      border: 'none',
      color: grey
    }
  }
};
