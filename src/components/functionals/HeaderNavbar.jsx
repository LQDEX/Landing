import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


//Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class HeaderNavbar extends Component {
  render() {
    const { classes, deviceType } = this.props;
    return (
      <div className={classes.root}>
        <img height={'80%'} src={require('../../assets/img/logoLiquidx.png')} alt="Logo" />
        {deviceType !== "mobile" && <div className="menuWraper">
          <button className="btnMenu">Exchange</button>
          <Link to="/About">
            <button className="btnMenu">About US</button>
          </Link >
          <button className="btnSubscribe">Sign up for Updates</button>
        </div>}
        {deviceType === "mobile" &&
          <button className="menuButton">
            <FontAwesome
              name='bars'
              size='3x'
              spin={false}
            />
          </button>
        }
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    deviceType: state.app.platform.deviceType,
  };
};

const dispatchToProps = dispatch => {
  return {
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
