import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Components
import { Menu } from '../functionals'

// Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

class HeaderNavbar extends Component {

  goTo(page, section) {
    if (page) {
      this.props.goToPage(page, null);
    }
    if (section) {
      this.props.navBarActive(section);
      window.location.href = `#${section}`;
    }
  }

  render() {
    const { classes, deviceType } = this.props;

    return (
      <div className={classes.root}>
        <img className="logo" src={require('../../assets/img/logoLiquidx.png')} alt="Logo" onClick={() => this.goTo('landing', 'exchange')} />
        {deviceType === 'desktop' && <Menu />}
        {deviceType !== 'desktop' &&
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <i className="fas fa-bars fa-3x"></i>
          </button>
        }
      </div>
    );
  }
}

const stateToProps = state => ({
  activePage: state.app.activePage,
  deviceType: state.app.platform.deviceType,
  navBar: state.app.navBar
});

const dispatchToProps = dispatch => ({
  sideNavToggle: () => dispatch(actions.sideNavToggle()),
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
