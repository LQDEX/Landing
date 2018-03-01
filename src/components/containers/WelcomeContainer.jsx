/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';

// Import Functionals
import { WelcomeBox } from '../functionals';


// Import Styles
import injectSheet from 'react-jss';
import { welcomeContainerStyle } from './styles';

class WelcomeContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div clasName={classes.root}>
        <WelcomeBox />
      </div>
    );
  }
}

export default injectSheet(welcomeContainerStyle)(WelcomeContainer);