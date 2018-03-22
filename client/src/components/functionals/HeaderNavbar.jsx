import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class HeaderNavbar extends Component {
  goToPage(page, param) {
    this.props.goToPage(page, param);
  }

  scrollTo(section) {
    window.location.href = section;
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
              onClick={() => this.scrollTo(option.pointTo)}
            >
              {option.caption}
            </button>
          )}
          {activePage.page !== 'signUp' &&
            <button className="btnSubscribe" onClick={() => this.goToPage('signUp')}>Sign up for Updates</button>
          }
        </div>}
        {deviceType === 'mobile' &&
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <i class="fal fa-bars fa-3x"></i>

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
  goToPage: (page, params) => dispatch(actions.goToPage(page, params))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
