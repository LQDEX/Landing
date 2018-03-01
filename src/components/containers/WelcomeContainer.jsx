/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';

// Import Functionals
import { WelcomeBox } from '../functionals';


// Import Styles
// Import { welcomeContainerStyle } from './styles';

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