import palette from './palette';

// const { videoBackground, textHeader, text } = palette,
const { textHeader, white } = palette,
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
      minWidth: '100%',
      '& .firstLine': {
        margin: '0 0 40px 0',
        fontFamily: 'Khand',
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',

        color: textHeader,
        minWidth: '100%'
      },
      '& .roadmapRow': {
        //        border: '1px solid cyan',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& .roadmapLine': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        Sborder: '1px solid red',
        minWidth: '39%'
      },
      '& .right': {
        minWidth: '33%',
        padding: '0 1% 0 0',
        textAlign: 'right'
        // // border: '1px solid green'

      },
      '& .left': {
        minWidth: '33%',
        padding: '0 0 0 1%'
        // // border: '1px solid green'
      },
      '& .exo': {
        fontFamily: 'Exo',
        fontSize: 16,
        color: white

      },
      '& .arsenal': {
        fontFamily: 'Arsenal',
        fontWeight: 'bold',
        fontSize: 20,
        color: white
      },
      '& .vLine': {
        position: 'relative',
        top: 2
      }
    }
  }

};
