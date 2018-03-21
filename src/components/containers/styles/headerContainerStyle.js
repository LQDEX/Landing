import palette from './palette';

const {
  shadowSoft,
  globalBackground
} = palette;

export default {
  root: {
    minWidth: '100%',
    zIndex: 1,
    '& .styckyNavbar': {
      background: globalBackground,
      overflowX: 'hidden',
      boxShadow: `0px 2px 10px 0px ${shadowSoft}`,
      zIndex: 1000
    }
  }
};
