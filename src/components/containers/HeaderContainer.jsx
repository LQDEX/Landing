
import React, { Component } from 'react';

// Import Functionals
import { HeaderStats, HeaderNavbar } from '../functionals';

// Import Styles
// import { headerContainerStyle } from './styles';


class HeaderContainer extends Component {
  render() {
    return (
      <div>
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

export default HeaderContainer;
