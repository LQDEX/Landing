import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { footerStyle } from './styles';

class Footer extends Component {
  render() {
    const { classes, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      mobile: classes.mRoot
    }[deviceType];
    return (
      <div className={style} >
        <div className="firstLine">Sign up for Updates</div>
        <button className="btnSubscribe">Sign up</button>
        <div className="copyRights">© 2018 Title of the Ecxhange. All Rights Reserved.</div>
        <div className="copyRights">Privacy Policy Terms & Conditions</div>
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
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(footerStyle)(Footer));