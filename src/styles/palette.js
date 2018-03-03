/* eslint-disable */
const basicColors = {

  //basic
  white: '#FFFFFF',

  // Good / Bad
  up: '#387C2C',
  down: '#EE3524',

  // Theme Color
  primary: '#488AFF',
  primaryHover: '#286CE5',
  secondary: '#FFFFFF',
  secondaryHover: '#757F93',
  greyBlue: '#ABB8CE',
  greyDark: '#373B42',
  grey: '#79869C',
  videoBackground: '#969696',
  frameShadow: 'rgba(0,0,0,0.25)',


};

const itemsColors = {
  textHeader: basicColors.greyBlue,
  textTilte: basicColors.primary,
  text: basicColors.greyDark,
  textLight: basicColors.grey,
  textHighlight: basicColors.primaryHover,
  frameBorder: basicColors.white,
};

export default {
  ...basicColors,
  ...itemsColors
};
