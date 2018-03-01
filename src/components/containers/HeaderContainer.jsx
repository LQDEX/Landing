
import React, { Component } from 'react';

// Import Functionals
import { HeaderStats, HeaderNavbar } from '../functionals';

// Import Styles
//Import Styles
import injectSheet from 'react-jss';
import { headerContainerStyle } from './styles';


class HeaderContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <HeaderStats />
        </div>
        <div>
          <HeaderNavbar />
        </div>
      </div>
    );
  }
}

export default injectSheet(headerContainerStyle)(HeaderContainer);
