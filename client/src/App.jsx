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
    // 768
    if (wWidth < 901) {
      this.props.platformSet({ deviceType: 'mobile' });

      return;
    } else if (wWidth < 1200) {
      this.props.platformSet({ deviceType: 'mobile' });

      return;
    }
    this.props.platformSet({ deviceType: 'desktop' });
  }

  onHashChange() {
    const section = window.location.hash.split('#')[1];
    this.props.navBarActive(section);

  }

  componentWillMount() {
    this.props.getCryptoData();
  }

  componentDidMount() {
    // let timer = setInterval(() => this.tick(), 30 * 24 * 60 * 60 * 1000);
    // this.setState({ timer });
    window.addEventListener('resize', () => this.updateDeviceType());
    window.addEventListener("hashchange", () => this.onHashChange(), false);
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
    //fetch('/users')
    //  .then(res => res.json())
    //  .then(users => this.setState({ users }));
  
  }

  // tick() {
  // this.props.getCryptoData();
  // }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceType.bind(this));
    window.removeEventListener("hashchange", this.onHashChange.bind(this));
  }

  render() {
    const { classes, app } = this.props;
    // console.log(app.platform.deviceType);

    return (
      <div className={classes.root}>
      <div>
        <ul>
        {this.state.users.map(user =>
          <li key={user.id}>{user.username}</li>
        )}
        </ul>
      </div>
        <Favicon url={require('./assets/img/favicon.ico')} />
        {/* Put here the Mobile Layout */}
        {app.platform.deviceType === 'mobile' && <MobileLandingLayout showBgVideo={app.config.backgroundVideo}/>}
        {/* Put here the Tablet Layout*/}
        {app.platform.deviceType === 'tablet' && <DesktopLandingLayout showBgVideo={app.config.backgroundVideo}/>}
        {/* Put here the Desktop Layout*/}
        {app.platform.deviceType === 'desktop' && <DesktopLandingLayout showBgVideo={app.config.backgroundVideo}/> }
      </div>
    );
  }
}

const stateToProps = state => ({ app: state.app });

const dispatchToProps = dispatch => ({
  getCryptoData: () => dispatch(actions.getCryptoData()),
  platformSet: platformInfo => dispatch(actions.platformSet(platformInfo)),
  navBarActive: option => dispatch(actions.navBarActive(option)),
  onWindowResize: wDim => dispatch(actions.onWindowResize(wDim)),
  setBgVideo: (value) => dispatch(actions.setAppConfig('backgroundVideo', value)),
  setBgVideoRes: (value) => dispatch(actions.setAppConfig('backgroundVideoRes', value)),
});

export default connect(stateToProps, dispatchToProps)(injectSheet(reset)(App));

