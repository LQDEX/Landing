
import React, { Component } from 'react';

// Import Functionals
import { WelcomeBox } from '../functionals';


// Import Styles
// import injectSheet from 'react-jss';

// import { welcomeContainerStyle } from './styles';

class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <WelcomeBox />
      </div>
    );
  }
}
export default WelcomeContainer;