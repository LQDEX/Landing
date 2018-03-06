import palette from './palette';

const {
  primary,
  up,
  down
} = palette;

export default {
  root: {
    '& .MarqueeContent': {
      // display: 'inline-block',
      height: 25,
      margin: '10px 75px',
      fontFamily: 'Roboto',
      fontSize: '16px',
      '& .circulatingSupply': { color: primary }
    },
    '& .up': { color: up },
    '& .down': { color: down }
  }
};
