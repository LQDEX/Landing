import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

class HeaderNavbar extends Component {

  goTo(section, page) {
    if (page) {
      this.props.goToPage(page, null);
    }
    if (section) {
      this.props.navBarActive(section);
      window.location.href = `#${section}`;
    }
  }

  render() {
    const { classes, deviceType, activePage, navBar } = this.props;

    return (
      <div className={classes.root}>
        <img height={'80%'} src={require('../../assets/img/logoLiquidx.png')} alt="Logo" onClick={() => this.scrollTo('/')}/>
        {deviceType !== 'mobile' && <div className="menuWraper">
          {navBar.options.map(option =>
            <button
              key={option.name}
              className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`}
              onClick={() => this.goTo(option.pointTo, option.pageTo)}
            >
              {option.caption}
            </button>
          )}
          {activePage.page !== 'signUp' &&
            <button className="btnSubscribe" onClick={() => this.goTo('signUp', 'signUp')}>Sign up for Updates</button>
          }
        </div>}
        {deviceType === 'mobile' &&
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
