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
  blueTxtHighlight: '#417DDF',
  greyLine:'#F0F0F0',
  greyBrown: '#969696',
  greyBlue: '#ABB8CE',
  greyBlueLight:'#979BA3',
  greyDark: '#373B42',
  greyText:'#4D5055',
  greyTextInfo:'#4A4F5A',
  grey: '#79869C',
  shadowSoft: 'rgba(0,0,0,0.25)',


};

const itemsColors = {
  videoBackground: basicColors.greyBrown,
  globalBackground: basicColors.white,
  textHeader: basicColors.greyBlue,
  textTilte: basicColors.primary,
  textNavBar: basicColors.greyText,
  text: basicColors.greyTextInfo,
  textLight: basicColors.greyBlue,
  textHighlight: basicColors.blueTxtHighlight,
  frameBorder: basicColors.white,
};

const txtFontFamily = {
  txtHeaderFont: 'Khand', //Khand
  txtSubheaderFont: 'Khand', //Khand
  txtBodyFont: 'Arsenal', //Arsenal
  txtCaptionFont: 'Exo', // Exo
  txtBlueBottonFont: 'Roboto', // Roboto
  txtMarqueeFont: 'Roboto', // Roboto
  txtInputs: 'Roboto' // Roboto


  

}

export default {
  ...basicColors,
  ...itemsColors,
  ...txtFontFamily
};