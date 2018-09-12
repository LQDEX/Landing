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
    justifyContent: 'space-between',
    margin: '0 7% 0 7%',
    alignItems: 'center',
    height: 80,
    '& .menuWraper': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      '& .btnMenuSubscribe': {
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
        '&:hover': { borderBottom: `1px solid ${primary}` },
        '& .btnLink': {
          color: primary,
          textDecoration: 'none'         
        }
      },
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
        '&:hover': { borderBottom: `1px solid ${textNavBar}` }
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
        textDecoration: 'none' ,
        '&:hover': { color: primaryHover, },
        '& .iconMargin': {
          margin: '0 0 0 10px',
        }
      },
      '& .dropdown': {
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
          color: textNavBar
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
        '&:hover .dropdownContent': {
          display: 'block'
        }
      }
    },
    '& .logo': {
      '&:hover': {
        cursor: 'pointer'
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
