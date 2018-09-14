import palette from './palette';

const {
  globalBackground,
  primary,
  primaryHover,
  textNavBar,
  txtCaptionFont,
  shadowSoft,
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& .btnMenu': {
      fontFamily: txtCaptionFont,
      fontSize: '15px',
      fontWeight: 'normal',
      display: 'inline-block',
      margin: '0 45px 0 0',
      padding: '5px 0',
      boxSizing: 'content-box',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      borderBottom: `1px solid transparent`,
      background: 'none',
      color: textNavBar,
      '& .btnLink': {
        color: primary,
        textDecoration: 'none',
      },
      '&:hover': { borderBottom: `1px solid ${textNavBar}` },
      '&:hover .btnLink': {
        padding: '0 0 5px 0',
        borderBottom: `1px solid ${primary}`
      }
    },
    '& .btnMenuIcon': {
      fontFamily: txtCaptionFont,
      fontSize: '15px',
      fontWeight: 'normal',
      display: 'inline-block',
      margin: '0 45px 0 0',
      padding: '5px 0',
      boxSizing: 'content-box',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      borderBottom: `1px solid transparent`,
      background: 'none',
    },
    '& .btnMenuActive': {
      extend: 'btnMenu',
      borderBottom: `1px solid ${textNavBar}`,
    },
    '& .navLink': {
      color: textNavBar,
      textDecoration: 'none',
    },
    '& .navLinkIcon': {

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',

      color: textNavBar,
      // color: grey,
      textDecoration: 'none',
      '&:hover': { color: primaryHover, },
      '& .iconMargin': {
        margin: '0 0 0 10px',
      }
    },
    '& .dropdown': {
      '&:hover .dropdownContent': {
        display: 'block',
      },
      '& .dropMenu': {
        fontFamily: txtCaptionFont,
        fontSize: '15px',
        fontWeight: 'normal',
        display: 'inline-block',
        margin: '0 45px 0 0',
        padding: '5px 0',
        boxSizing: 'content-box',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        borderBottom: `1px solid transparent`,
        background: 'none',
        color: textNavBar,
      },
      '& .dropdownContent': {
        display: 'none',
        position: 'absolute',
        backgroundColor: globalBackground,
        boxShadow: `0px 8px 16px 0px ${shadowSoft}`,
        '& .dropMenuOption': {
          padding: '12px 16px',
          textDecoration: 'none',
          display: 'block',
          '&:hover': {
            textDecoration: 'underline',
          }
        },
      },
    }
  },
  mRoot: {
    extend: 'root',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& .btnMenu': {
      margin: '0 0 0 35px',
      '& .btnLink': {
        margin: 0,
        padding: 0,
        fontSize: '15px',
      }
    },
    '& .dropdown': {
      margin: '0 0 0 35px'
    },
    '& .btnMenuIcon': {
      '& .navLinkIcon': {
        padding: '0 0 0 32px',
      }
    }
  }
};

// .button:hover {
// background: rgb(111, 186, 34);
// -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
// -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
// -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
// transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
// }
// .button:active {
// background: rgb(98, 172, 21);
// -webkit-box-shadow: 0 1px 4px 0 rgb(65,105,23) inset;
// box-shadow: 0 1px 4px 0 rgb(65,105,23) inset;
// -webkit-transition: none;
// -moz-transition: none;
// -o-transition: none;
// transition: none;
// }
