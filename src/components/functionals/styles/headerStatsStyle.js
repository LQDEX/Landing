import palette from './palette';

const { green, red } = palette;

export default {
  root: {
    '& .Marquee': {
      display: 'block',
      overflowX: 'hidden',
      fontFamily: 'Roboto',
      margin: '21px 0'
    },
    '& .MarqueeContent': {},
    '& .up': { color: green },
    '& .down': { color: red }
  }
};
