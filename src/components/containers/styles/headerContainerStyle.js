import palette from './palette';

const { grey, white } = palette;

export default {
  root: {
    minWidth: '100%',

    zIndex: 10000,
    '& .styckyNavbar': {
      background: white,
      overflowX: 'hidden',
      boxShadow: `0px 2px 20px 0px ${grey}`
    }
  }
};
