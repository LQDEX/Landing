import palette from './palette';

const {
  globalBackground,
  primary,
  primaryHover,
  text
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 7% 0 7%',
    alignItems: 'center',
    height: 80,
    '& .menuButton': {
      outline: 'none',
      border: 'none',
      background: 'none',
      color: primary
    },
    '& .menuWraper': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      '& .btnSubscribe': {
        fontFamily: 'Roboto',
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
      },
      '& .btnMenu': {
        fontFamily: 'Exo',
        fontSize: '1em',
        fontWeight: 'semi-Bold',
        display: 'inline-block',
        margin: '0 45px 0 0',
        padding: '5px 0',
        boxSizing: 'content-box',
        cursor: 'pointer',
        border: 'none',
        borderBottom: `1px solid transparent`,
        background: 'none',
        color: text,
        '&:hover': { borderBottom: `1px solid ${text}` }
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
