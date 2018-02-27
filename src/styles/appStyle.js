import palette from './palette';

const { white, boxShadow } = palette;

export default {
  root: {
    height: '100vh',
    backgroundColor: white,
    '& .paper-container': { boxShadow }
  }
};
