import palette from './palette';

const {
  primary,
  globalBackground,
  textHeader,
  text,
  grey,
  txtHeaderFont,
  txtBodyFont,
  txtCaptionFont
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: globalBackground,
    '& #svgLogo': { opacity: 0 },
    '& .firstLine': {
      margin: '100px 0 51px 0',
      fontFamily: txtHeaderFont,
      fontSize: '48px',
      fontWeight: 'bold',
      color: textHeader
    },
    '& .txtBody': {
      fontFamily: txtBodyFont,
      fontSize: '22px',
      fontWeight: 'normal',
      lineHeight: '1.5em',
      textAlign: 'justify',
      maxWidth: '1000px',
      color: text,
      margin: '0 25px 30px 25px',
    },
    '& .teamRow': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '25px 0 100px 0'
    },
    '&  .card': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      margin: '0 25px 30px 25px'
      

    },
    '& .mateName': {
      fontFamily: txtHeaderFont,
      fontSize: 32,
      fontWeight: 'bold',
      color: primary,
      borderBottom: `1px solid ${globalBackground}`,
      margin: '40px 0 15px 0',
      '& .nameLink': {
        outline: 'none',
        textDecoration: 'none',
        color: primary,
        '&:link': { textDecoration: 'none' },
        '&visited': { textDecoration: 'none' },
        '&hover': { textDecoration: 'none' },
        '&active': { textDecoration: 'none' }
      }
    },
    '& .matePosition': {
      fontFamily: txtCaptionFont,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: '23px',
      color: grey
    },
    '& .mateBrief': {
      fontFamily: txtBodyFont,
      fontSize: 22,
      fontWeight: 400,
      //textAlign: 'justify',
      textAlign: 'center',
      lineHeight: '1.5em',
      //lineHeight: '22px',
      padding: '0 35px',
      color: text,
      margin: '7px 0 0 0'
    }
  },
  mRoot: {
    extend: 'root',
    '& .firstLine': {
      extend: 'firstLine',
      fontSize: '38px'
    },
  }
};
