import palette from './palette';

const { primary, textHeader, text, grey, frameBorder, frameShadow } = palette,
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
    '& .frameContainer': {
      // border: '1px solid blue',
      transform: 'scale(0.8)',
      filter: `drop-shadow(0px 0px 5px ${frameShadow})`,
      '& .frameOutside0': {
        position: 'static',
        background: frameBorder,
        clipPath: shape0,
        '& .frameInside0': {
          position: 'relative',
          transform: 'scale(0.92)',
          // background: white,
          clipPath: shape0,
          '&:hover': {
            background: primary,
            cursor: 'pointer',
            '& .in': { opacity: 1 }
          },
          '& img:hover': { opacity: 0.5 },
          '& .in': {
            position: 'absolute',
            top: 130,
            left: 150,
            opacity: 0
          }
        }
      },
      '& .frameOutside1': {
        position: 'static',
        background: frameBorder,
        clipPath: shape1,
        '& .frameInside1': {
          position: 'relative',
          transform: 'scale(0.92)',
          // background: white,
          clipPath: shape1,
          '&:hover': {
            background: primary,
            cursor: 'pointer',
            '& .in': { opacity: 1 }
          },
          '& img:hover': { opacity: 0.5 },
          '& .in': {
            position: 'absolute',
            top: 130,
            left: 150,
            opacity: 0
          }
        }
      },
      '& .frameOutside2': {
        position: 'static',
        background: frameBorder,
        clipPath: shape2,
        '& .frameInside2': {
          position: 'relative',
          transform: 'scale(0.92)',
          // background: white,
          clipPath: shape2,
          '&:hover': {
            background: primary,
            cursor: 'pointer',
            '& .in': { opacity: 1 }
          },
          '& img:hover': { opacity: 0.5 },
          '& .in': {
            position: 'absolute',
            top: 130,
            left: 150,
            opacity: 0
          }
        }
      },
      '& .frameOutside3': {
        position: 'static',
        background: frameBorder,
        clipPath: shape3,
        '& .frameInside3': {
          position: 'relative',
          transform: 'scale(0.92)',
          // background: white,
          clipPath: shape3,
          '&:hover': {
            background: primary,
            cursor: 'pointer',
            '& .in': { opacity: 1 }
          },
          '& img:hover': { opacity: 0.5 },
          '& .in': {
            position: 'absolute',
            top: 130,
            left: 150,
            opacity: 0
          }
        }
      },
      '& .frameOutside4': {
        position: 'static',
        background: frameBorder,
        clipPath: shape4,
        '& .frameInside4': {
          position: 'relative',
          transform: 'scale(0.92)',
          // background: white,
          clipPath: shape4,
          '&:hover': {
            background: primary,
            cursor: 'pointer',
            '& .in': { opacity: 1 }
          },
          '& img:hover': { opacity: 0.5 },
          '& .in': {
            position: 'absolute',
            top: 130,
            left: 150,
            opacity: 0
          }
        }
      }
    },
    '& .firstLine': {
      margin: '0 0 51px 0',
      fontFamily: 'Khand',
      fontSize: '48px',
      fontWeight: 'bold',
      color: textHeader
    },
    '& .teamRow': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 0 100px 0'
    },
    '&  .card': {
      // border: '1px solid green',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px'
    },
    '& .mateName': {
      fontFamily: 'Khand',
      color: primary,
      margin: '0 0 5px 0'

    },
    '& .mateTitle': {
      fontFamily: 'Exo',
      fontWeight: 'semibold',
      color: grey
    },
    '& .mateBrief': {
      fontFamily: 'Arsenal',
      fontWeight: 'semibold',
      textAlign: 'center',
      padding: '0 30px',
      color: text,
      margin: '7px 0 0 0'
    }
  }
};
