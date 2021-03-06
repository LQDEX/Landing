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
      margin: '0 0 51px 0',
      fontFamily: txtHeaderFont,
      fontSize: '48px',
      fontWeight: 'bold',
      color: textHeader
    },
    '& .teamRow': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '0 0 100px 0'
    },
    '&  .card': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      '&:hover': {
        '& > .mateName': { borderBottom: `1px solid ${primary}` },
        '& > div > a > div > svg > #svgLogo': { opacity: 1 },
        '& > div > a > div > svg > #svgImage': { opacity: 0.5 }
      }

    },
    '& .mateName': {
      fontFamily: txtHeaderFont,
      fontSize: 19,
      fontWeight: 'bold',
      color: primary,
      borderBottom: `1px solid ${globalBackground}`,
      margin: '0 0 15px 0',
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
      fontWeight: 400,
      textAlign: 'center',
      lineHeight: '22px',
      padding: '0 30px',
      color: text,
      margin: '7px 0 0 0'
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
