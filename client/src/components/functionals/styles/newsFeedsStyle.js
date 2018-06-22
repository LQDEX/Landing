import palette from './palette';

const {
  primary,
  primaryHover,
  globalBackground,
  grey,
  textHeader,
  txtHeaderFont,
  txtBlueBottonFont,
  txtCaptionFont
} = palette;

export default {
  root: {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0 30px 0',
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
    '& .newsFeedCardWrapper': {
      border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
      '& .newsFeedCard': {
        border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 20px',
        minHeight: 110,
        textDecoration: 'none',
        '& .icon': {
          padding: '8px 20px',
          textDecoration: 'none',
          color: grey,
          '&:hover': { color: primaryHover }
        },
      },
    },
    '& .feedName': {
      fontFamily: txtHeaderFont,
      fontSize: 19,
      fontWeight: 'bold',
      color: primary,
      borderBottom: `1px solid ${globalBackground}`,
      margin: '15px 0 0 0',
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
    '& .feedPosition': {
      fontFamily: txtCaptionFont,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: '23px',
      color: grey
    },
  },
  mRoot: {
    extend: 'root',
    '& .firstLine': {
      extend: 'firstLine',
      fontSize: '38px'
    }
  }
};
