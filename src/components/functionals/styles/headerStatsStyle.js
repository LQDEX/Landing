import palette from './palette';

const {
  primary,
  white,
  up,
  down,
  txtMarqueeFont
} = palette;

export default {
  root: {
    '& .MarqueeContent': {
      background: white,
      // display: 'inline-block',
      height: 25,
      padding: '20px 75px 10px 75px',
      fontFamily: txtMarqueeFont,
      fontSize: '16px',
      '& .circulatingSupply': { color: primary }
    },
    '& .up': { color: up },
    '& .down': { color: down }
  }
};
