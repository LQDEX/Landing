import palette from './palette';

const { up, down } = palette;

export default {
  root: {
    '& .Marquee': {
      display: 'block',
      overflowX: 'hidden',
      fontFamily: 'Roboto',
      margin: '21px 0'
    },
    '& .MarqueeContent': {
      height: 18,
      overflowY: 'hidden',
      fontSize: '16px'

    },
    '& .up': { color: up },
    '& .down': { color: down }
  }
};
