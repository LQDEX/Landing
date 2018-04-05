import palette from './palette';

const {
  primary,
  primaryHover,
  greyLine,
  greyBlueLight,
  grey,
  textNavBar,
  globalBackground,
  videoBackground,
  txtCaptionFont,
  txtBlueBottonFont
} = palette;

export default {
  root: {
    overflowX: 'hidden',
    '& .movingLines': {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -2
    },
    '& .bkTone': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: videoBackground,
      opacity: 0.2,
      zIndex: -1
    },
    '& .sideNav': {
      height: '100%',
      width: '75%',
      position: 'fixed',
      zIndex: 1000,
      top: 0,
      right: 0,
      backgroundColor: globalBackground,
      paddingTop: '90px',
      overflowX: 'hidden',
      boxShadow: `0px 2px 20px 0px ${grey}`,
      // transition: '0.5s',
      '& .menuButton': {
        position: 'absolute',
        top: 15,
        right: 25,
        marginLeft: '50px',
        border: 'none',
        background: 'none',
        color: primary
      },
      '& a': {
        padding: '8px 8px 8px 32px',
        textDecoration: 'none',
        fontSize: '25px',
        color: '#818181',
        display: 'block',
        transition: '0.3s'
      },
      '& .menuWraper': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '5px 0 5px 0px',
        '& .btnMenu': {
          outline: 'none',
          fontFamily: txtCaptionFont,
          fontSize: '14px',
          fontWeight: '400',
          display: 'inline-block',
          boxSizing: 'content-box',
          cursor: 'pointer',
          margin: '10px 30px',
          border: 'none',
          background: 'none',
          color: textNavBar,
          '&:hover': { color: primaryHover }
        },
        '& .btnMenuActive': {
          extend: 'btnMenu',
          borderBottom: `1px solid ${textNavBar}`
        },
        '& .privacy': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          fontFamily: txtBlueBottonFont,
          fontSize: '14px',
          lineHeight: '1.5em',
          color: greyBlueLight,
          margin: '10px 30px',
          '& .em': {
            padding: '0',
            textDecoration: 'none',
            fontSize: '14px',
            '&:hover': { color: primary }
          }
        },
        '& .hr': {
          borderTop: `0.5px solid ${greyLine}`,
          margin: '10px 32px',
          width: '85%'
        }
      }
    }
  }
};
