import palette from './palette';

const {
  up,
  down
} = palette;

export default {
  root: {
    '& .MarqueeContent': {
      display: 'inline-block',
      height: 25,
      margin: '0.5% 500px 0.5% 0',
      fontFamily: 'Roboto',
      fontSize: '16px'

    },
    '& .up': { color: up },
    '& .down': { color: down }
  }
};
