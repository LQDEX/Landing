import React, { Component } from 'react';
import { connect } from 'react-redux';
import Platform from 'react-platform-js';
import Favicon from 'react-favicon';

// Redux actions
import actions from './redux/actions';

// JSS and styles
import injectSheet from 'react-jss';
import reset from 'reset-jss';

// Import components
import { DesktopLandingLayout, MobileLandingLayout } from './components/layouts';


class App extends Component {
  updateDeviceType() {
    const wWidth = window.innerWidth;
    if (wWidth < 750) {
      this.props.platformSet({ deviceType: 'mobile' });
      console.log(wWidth);
      
return;
    }
    // else if (wWidth<970){
    //   this.props.platformSet({deviceType:'tablet'});
    //   return;
    // }
    this.props.platformSet({ deviceType: 'desktop' });
  }


  componentWillMount() {
    this.props.getCryptoData();
  }

  componentDidMount() {
    // let timer = setInterval(() => this.tick(), 30 * 24 * 60 * 60 * 1000);
    // this.setState({ timer });
    window.addEventListener('resize', () => this.updateDeviceType());
    this.props.platformSet({
      // os: Platform.OS || '',
      // osVersion: Platform.OSVersion || '',
      // browser: Platform.Browser || '',
      // browserVersion: Platform.BrowserVersion || '',
      // engine: Platform.Engine || '',
      // cpu: Platform.CPU || '',
      deviceType: Platform.DeviceType || 'desktop'
      // deviceModel: Platform.DeviceModel || '',
      // deviceVendor: Platform.DeviceVendor || '',
      // ua: Platform.UA || ''
    });
  }

  // tick() {
  // this.props.getCryptoData();
  // }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceType.bind(this));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Favicon url={require('./assets/img/favicon.svg')} />
        <Platform rules={{ DeviceType: 'mobile' }}>
          {/* Put here the Mobile Layout */}
          <MobileLandingLayout />
        </Platform>
        <Platform rules={{ DeviceType: 'tablet' }}>
          {/* Put here the Tablet Layout */}
          <p>Tablet</p>
          <DesktopLandingLayout />
        </Platform>
        <Platform rules={{ DeviceType: undefined }}>
          {/* Put here the Desktop Layout */}
          <DesktopLandingLayout />
        </Platform>
      </div>
    );
  }
}

const stateToProps = state => ({ app: state.app });

const dispatchToProps = dispatch => ({
  getCryptoData: () => dispatch(actions.getCryptoData()),
  platformSet: platformInfo => dispatch(actions.platformSet(platformInfo))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(reset)(App));

