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
    const { classes, deviceType, activePage } = this.props;

    return (
      <div className={classes.root}>
        <img height={'80%'} src={require('../../assets/img/logoLiquidx.png')} alt="Logo" onClick={() => this.scrollTo('/')}/>
        {deviceType !== 'mobile' && <div className="menuWraper">
          <button className="btnMenu" onClick={() => this.scrollTo('#Roadmap')}>Exchange</button>
          <button className="btnMenu" onClick={() => this.scrollTo('#Team')}>About</button>
          <button className="btnMenu" onClick={() => this.scrollTo('#Footer')}>Contact</button>
          {activePage.page !== 'signUp' &&
            <button className="btnSubscribe" onClick={() => this.goToPage('signUp')}>Sign up for Updates</button>
          }
        </div>}
        {deviceType === 'mobile' &&
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <FontAwesome
              name="bars"
              size="3x"
              spin={false}
            />
          </button>
        }
      </div>
    );
  }
}

const stateToProps = state => ({
  activePage: state.app.activePage,
  deviceType: state.app.platform.deviceType
});

const dispatchToProps = dispatch => ({
  sideNavToggle: () => dispatch(actions.sideNavToggle()),
  goToPage: (page, params) => dispatch(actions.goToPage(page, params))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
