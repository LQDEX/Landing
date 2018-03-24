import palette from './palette';

const {
  primary,
  greyText,
  white,
  up,
  down,
  txtMarqueeFont
} = palette;

export default {

  root: {
    '& .MarqueeWrap': {
      background: white,
      display: 'inline-block',
      height: 46,
      '& .MarqueeContent': {
        display: 'inline-block',
        padding: '15px 75px',
        fontFamily: txtMarqueeFont,
        fontSize: '13px',
        fontWeight: 400,
        color: greyText,
        '& .circulatingSupply': { color: primary }
      }
    },
    '& .up': { color: up },
    '& .down': { color: down }
  }
};
