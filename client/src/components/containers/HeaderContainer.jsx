
import React, { Component } from 'react';

// Import Modules
import Sticky from 'react-sticky-el';

// Import Functionals
import { HeaderStats, HeaderNavbar } from '../functionals';

// Import Styles
// Import Styles
import injectSheet from 'react-jss';
import { headerContainerStyle } from './styles';


class HeaderContainer extends Component {
  render() {
    const { classes } = this.props;
    
return (
      <div className={classes.root}>
        <HeaderStats />
        <Sticky topOffset={-10} hideOnBoundaryHit={true} stickyClassName={'styckyNavbar'} >
          <HeaderNavbar />
        </Sticky >
      </div>
    );
  }
}

export default injectSheet(headerContainerStyle)(HeaderContainer);
