import palette from './palette';

const {
    primary,
    globalBackground,
    textHeader,
    text,
    grey,
    frameBorder,
    shadowSoft,
    txtHeaderFont,
    txtBodyFont,
    txtCaptionFont
  } = palette,
  shape0 = 'polygon(20% 0, 85% 9%, 100% 54%, 66% 100%, 0 61%)',
  shape1 = 'polygon(79% 0, 100% 50%, 60% 100%, 7% 90%, 0 19%)',
  shape2 = 'polygon(60% 0, 100% 30%, 81% 93%, 25% 100%, 0 47%)',
  shape3 = 'polygon(69% 0, 100% 35%, 90% 100%, 25% 94%, 0 27%)',
  shape4 = 'polygon(54% 0, 100% 41%, 71% 91%, 31% 100%, 0 40%, 13% 10%)';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: globalBackground,

    '& #image-svg': { filter: `drop-shadow(0px 0px 5px ${shadowSoft})` },

    '& .frameLink': {
      outline: 'none',
      '& .frameContainer': {
        transform: 'scale(0.90)',
        '& .frameOutside0': {
          position: 'static',
          background: frameBorder,
          '-webkit-clip-path': shape0,
          clipPath: shape0,
          '& .frameInside0': {
            position: 'relative',
            transform: 'scale(0.92)',
            '-webkit-clip-path': shape0,
            clipPath: shape0
          }
        },
        '& .frameOutside1': {
          position: 'static',
          background: frameBorder,
          '-webkit-clip-path': shape1,
          clipPath: shape1,
          '& .frameInside1': {
            position: 'relative',
            transform: 'scale(0.92)',
            '-webkit-clip-path': shape1,
            clipPath: shape1
          }
        },
        '& .frameOutside2': {
          position: 'static',
          background: frameBorder,
          '-webkit-clip-path': shape2,
          clipPath: shape2,
          '& .frameInside2': {
            position: 'relative',
            transform: 'scale(0.92)',
            '-webkit-clip-path': shape2,
            clipPath: shape2
          }
        },
        '& .frameOutside3': {
          position: 'static',
          background: frameBorder,
          '-webkit-clip-path': shape3,
          clipPath: shape3,
          '& .frameInside3': {
            position: 'relative',
            transform: 'scale(0.92)',
            '-webkit-clip-path': shape3,
            clipPath: shape3
          }
        },
        '& .frameOutside4': {
          position: 'static',
          background: frameBorder,
          '-webkit-clip-path': shape4,
          clipPath: shape4,
          '& .frameInside4': {
            position: 'relative',
            transform: 'scale(0.92)',
            '-webkit-clip-path': shape4,
            clipPath: shape4
          }
        },
        '& .in': {
          position: 'absolute',
          top: 130,
          left: 150,
          opacity: 0
        }
      }
    },
    '& .firstLine': {
      margin: '0 0 51px 0',
      fontFamily: txtHeaderFont,
      fontSize: '48px',
      fontWeight: 'bold',
      color: textHeader
    },
    '& .teamRow': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '0 0 100px 0'
    },
    '&  .card': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px',
      '&:hover': {
        '& > .mateName': { borderBottom: `1px solid ${primary}` },
        '& > div > a > div .in': { opacity: 1 },
        '& > div > a > div > div > div': {
          background: primary,
          cursor: 'pointer',
          '& .avatar': { opacity: 0.5 }
        }
      }

    },
    '& .mateName': {
      fontFamily: txtHeaderFont,
      fontSize: 19,
      fontWeight: 'bold',
      color: primary,
      borderBottom: `1px solid ${globalBackground}`,
      margin: '0 0 15px 0',
      '& .nameLink': {
        outline: 'none',
        textDecoration: 'none',
        color: primary,
        '&:link': { textDecoration: 'none' },
        '&visited': { textDecoration: 'none' },
        '&hover': { textDecoration: 'none' },
        '&active': { textDecoration: 'none' }
      }
    },
    '& .matePosition': {
      fontFamily: txtCaptionFont,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: '23px',
      color: grey
    },
    '& .mateBrief': {
      fontFamily: txtBodyFont,
      fontWeight: 400,
      textAlign: 'center',
      lineHeight: '22px',
      padding: '0 30px',
      color: text,
      margin: '7px 0 0 0'
    }
  },
  mRoot: {
    extend: 'root',
    '& .firstLine': {
      extend: 'firstLine',
      fontSize: '38px'
    }
  }
};
