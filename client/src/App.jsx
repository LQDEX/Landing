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
  state = {users:[]}

  updateDeviceType() {

    /**
     * Extra small <576px
     * Small ≥576px
     * Medium ≥768px
     * Large ≥992px
     * Extra large ≥1200px
     */
    const wWidth = window.innerWidth;
    this.setState({ wWidth });
    if (wWidth < 768) {
      this.props.platformSet({ deviceType: 'mobile' });

      return;
    } else if (wWidth < 1200) {
      this.props.platformSet({ deviceType: 'tablet' });

      return;
    }
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
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  
  }

  // tick() {
  // this.props.getCryptoData();
  // }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceType.bind(this));
  }

  render() {
    const { classes, app } = this.props;
    console.log(app.platform.deviceType);

    return (
      <div className={classes.root}>
      <div>
        <h1>Users</h1>
        <ul>
        {this.state.users.map(user =>
          <li key={user.id}>{user.username}</li>
        )}
        </ul>
      </div>
        <Favicon url={require('./assets/img/favicon.svg')} />
        {/* Put here the Mobile Layout */}
        {app.platform.deviceType === 'mobile' && <MobileLandingLayout />}
        {/* Put here the Tablet Layout*/}
        {app.platform.deviceType === 'tablet' && <DesktopLandingLayout />}
        {/* Put here the Desktop Layout*/}
        {app.platform.deviceType === 'desktop' && <DesktopLandingLayout /> }
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

