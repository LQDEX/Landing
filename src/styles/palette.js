/* eslint-disable */
const basicColors = {
  white: '#FFFFFF',
  primary: '#1991CC',
  primaryDark: '#0073a8',
  primaryLight: '#53a5cc',
  greyDark: '#373B42',
  grey: '#BDC3C7',
  greyLight: '#F0F2F5',
  greyBlue: '#ABB8CE',
  secondary: '#1ABC9C',
  red: '#D61414',
  green: '#97CB54',
  videoBackground: '#969696',
  transparentBlack: 'rgba(0, 0, 0, 0.70)',
  boxShadow: '-1px 18px 38px -18px rgba(0,0,0,0.25)'
};

const themeColors = {

  textHeader: basicColors.greyBlue,
  text: basicColors.greyDark,
  textLight: basicColors.grey
};

export default {
  ...basicColors,
  ...themeColors
};
