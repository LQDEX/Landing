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
    '& .menuButton': {
      outline: 'none',
      border: 'none',
      background: 'none',
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
