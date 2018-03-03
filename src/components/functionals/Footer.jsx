import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { footerStyle } from './styles';

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="firstLine">Sign up for Updates</div>
        <button className="btnSubscribe">Sign up</button>
        <div className="copyRights">© 2018 Title of the Ecxhange. All Rights Reserved.</div>
        <div className="copyRights">Privacy Policy Terms & Conditions</div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(footerStyle)(Footer));