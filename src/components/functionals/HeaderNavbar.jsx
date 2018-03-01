import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

class HeaderNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img height={'80%'} src={require('../../assets/img/logo.png')} alt="Logo" />
        <div className="menuWraper">

          <button className="btnMenu">EXCHANGE</button>
          {/* <button className="btnMenu">ICO</button> */}
          <button className="btnMenu">CONTACT</button>
          {/* <button className="btnSubscribe">Subscribe for Presale</button> */}
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
