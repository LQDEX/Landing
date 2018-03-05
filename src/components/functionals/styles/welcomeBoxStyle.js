import palette from './palette';

const {
    videoBackground,
    textHeader,
    text
  } = palette,

  shape = 'polygon(100% 0, 100% 96%, 67% 84%, 0 100%, 0 0)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    top: -80,
    background: videoBackground,
    '-webkit-clip-path': shape,
    clipPath: shape,
    '& .myVideo': {
      maxWidth: '100%',
      filter: 'opacity(80%)'
    },
    '&  .overlay': {

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: '20%',
      left: '0%',
      minWidth: '90%',
      margin: '3%',
      '& .macBook': {},
      '& .textArea': {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        minHeight: '80%'
      },
      '& .firstLine': {
        margin: '0 0 51px 0',
        fontFamily: 'Khand',
        fontSize: '48px',
        fontWeight: 'bold',

        color: textHeader
      },
      '& .txtBody': {
        fontFamily: 'Khand',
        fontSize: '40px',
        fontWeight: 'semibold',
        color: text
      }
    }
  }
};
