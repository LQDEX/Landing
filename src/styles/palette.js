/* eslint-disable */
const basicColors = {

  // Good / Bad
  green: '#387C2C',
  red: '#EE3524',

  // Theme Color
  primary: '#488AFF',
  primaryHover: '#286CE5',
  secondary: '#FFFFFF',
  secondaryHover: '#757F93',
  greyBlue: '#ABB8CE',
  greyDark: '#373B42',
  grey: '#BDC3C7',
  videoBackground: '#969696',


};

const textColors = {

  textHeader: basicColors.greyBlue,
  textTilte: basicColors.primary,
  text: basicColors.greyDark,
  textLight: basicColors.grey
};

export default {
  ...basicColors,
  ...textColors
};
