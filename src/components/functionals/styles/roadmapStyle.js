import palette from './palette';

// const { videoBackground, textHeader, text } = palette,
const { textHeader } = palette,
  shape = 'polygon(29% 18%, 100% 0, 100% 99%, 65% 86%, 0 96%, 0 10%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .imgClip': {
      width: '100%',
      clipPath: shape
    },
    '& .overlay': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      border: '1px solid red',
      '& .firstLine': {
        margin: ' 0 0 0',
        fontFamily: 'Khand',
        fontSize: '48px',
        fontWeight: 'bold',
        letterSpacing: '-1px',
        color: textHeader
      },
      '& .roadmapRow': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }

};
