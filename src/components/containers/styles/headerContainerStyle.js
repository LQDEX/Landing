import palette from './palette';

const {
  grey,
  globalBackground
} = palette;

export default {
  root: {
    minWidth: '100%',

    zIndex: 10000,
    '& .styckyNavbar': {
      background: globalBackground,
      overflowX: 'hidden',
      boxShadow: `0px 2px 20px 0px ${grey}`
    }
  }
};
