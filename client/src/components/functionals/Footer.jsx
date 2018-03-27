import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { footerStyle } from './styles';

class Footer extends Component {

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
    const { classes, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      tablet: classes.root,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style} >
        <div className="firstLine">Sign up for Updates</div>
        <button className="btnSubscribe" onClick={() => this.goTo('signUp', 'signUp')}>Sign up</button>
        <div className="copyRights">© 2018 Title of the Ecxhange. All Rights Reserved.</div>
        <div className="copyRights">Privacy Policy Terms & Conditions</div>
      </div>
    );
  }
}

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(footerStyle)(Footer));
