import React, { Component } from 'react';
import { connect } from 'react-redux';
import Platform from 'react-platform-js';
import Favicon from 'react-favicon';

//Redux actions
import actions from './redux/actions';

//JSS and styles
import injectSheet from 'react-jss';
import appStyles from './styles/appStyle';

//Import components
import { DesktopLayout } from './components/layouts';

class App extends Component {
  state = {};
  componentWillMount() {
  }
  componentDidMount() {

    this.props.platformGet({
      os: Platform.OS || '',
      osVersion: Platform.OSVersion || '',
      browser: Platform.Browser || '',
      browserVersion: Platform.BrowserVersion || '',
      engine: Platform.Engine || '',
      cpu: Platform.CPU || '',
      deviceType: Platform.DeviceType || 'desktop',
      deviceModel: Platform.DeviceModel || '',
      deviceVendor: Platform.DeviceVendor || '',
      ua: Platform.UA || ''
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Favicon url={require('./assets/img/favicon.svg')} />
        <Platform rules={{ DeviceType: 'mobile' }}>
          Mobile Version
        </Platform>
        <Platform rules={{ DeviceType: 'tablet' }}>
          Tablet Version
        </Platform>
        <Platform rules={{ DeviceType: undefined }}>
          <DesktopLayout />
        </Platform>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    app: state.app
  };
};

const dispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(actions.setCurrentUser(user)),
    getSysInfo: () => {
      return (
        dispatch(actions.getSysPrice()),
        dispatch(actions.getSysMnTotal()),
        dispatch(actions.getSysMnRegistered()),
        dispatch(actions.getSysUserRegistered())
      )
    },

    platformGet: platformInfo => dispatch(actions.platformGet(platformInfo)),
    setAuth: auth => dispatch(actions.setAuth(auth))
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(appStyles)(App));

