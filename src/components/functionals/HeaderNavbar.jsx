import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class HeaderNavbar extends Component {
  goToPage(page) {
    alert(`Go to ${page}`);
  }

  render() {
    const { classes, deviceType } = this.props;

    return (
      <div className={classes.root}>
        <img height={'80%'} src={require('../../assets/img/logoLiquidx.png')} alt="Logo" />
        {deviceType !== 'mobile' && <div className="menuWraper">
          <button className="btnMenu" onClick={() => this.goToPage('exchange')}>Exchange</button>
          <button className="btnMenu" onClick={() => this.goToPage('about')}>About US</button>
          <button className="btnSubscribe" onClick={() => this.goToPage('register')}>Sign up for Updates</button>
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

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({ sideNavToggle: () => dispatch(actions.sideNavToggle()) });

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
