import palette from './palette';

const {
  globalBackground,
  textHeader,
  text,
  textHighlight,
  txtHeaderFont,
  txtBodyFont
} = palette;

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    position: 'relative',
    minWidth: '100%',
    borderTop: `100px solid ${globalBackground}`,
    borderBottom: `100px solid ${globalBackground}`,
    '& .infoRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      position: 'relative',
      minWidth: '100%',
      overflow: 'hidden',

      '& .textBlockLeft': {
        flex: '2 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        lineHeight: '2em',
        backgroundColor: globalBackground,
        padding: '0 2% 0% 7%'
      },
      '& .imgBlockTop': {
        position: 'relative',
        display: 'flex'
      },
      '& .textBlockRight': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: globalBackground,
        width: '100%',
        padding: '0 7% 0 2%',
        textAlign: 'right',
        lineHeight: '2em'
      },
      '& .imgBlockBottom': {
        position: 'relative',
        display: 'flex'
      },
      '& .firstLine': {
        margin: '0 0 51px 0',
        fontFamily: txtHeaderFont,
        fontSize: '48px',
        fontWeight: 'bold',
        color: textHeader,
        '@media only screen and (max-width: 1020px)': { fontSize: '4vw' },
        '@media only screen and (max-width: 933px)': { fontSize: '3.5vw' }
      },
      '& .txtBody': {
        fontFamily: txtBodyFont,
        fontSize: '20px',
        fontWeight: 'normal',
        maxWidth: '660px',
        color: text
      },
      '& .txtHighlight': {
        extend: 'txtBody',
        color: textHighlight,
        fontWeight: 'bold'
      },
      '& .traslucent80': { filter: 'opacity(80%)' }
    }
  },
  mRoot: {
    extend: 'root',
    '& .infoRow': {
      extend: 'infoRow',
      flexDirection: 'column',
      maxHeight: 1000,
      '& .textBlockLeft': {
        extend: 'textBlockLeft',
        borderTop: `50px solid ${globalBackground}`,
        borderBottom: `50px solid ${globalBackground}`,
        padding: '10%'
      },
      '& .textBlockRight': {
        extend: 'textBlockRight',
        borderTop: `20px solid ${globalBackground}`,
        borderBottom: `50px solid ${globalBackground}`,
        width: '91%',
        padding: '0 7% 0 2%'
      },
      '& .firstLine': {
        extend: 'firstLine',
        '@media only screen and (min-width: 100px)': { fontSize: '38px' }
        // fontSize: '48px'
      }
    }
  },
  tRoot: {
    extend: 'root',
    '& .infoRow': {
      extend: 'infoRow',
      borderTop: `100px solid ${globalBackground}`
    }
  }
};
