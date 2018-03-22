import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Components
import { HeaderContainer } from '../containers';
import { Landing, SignUp } from '../pages/';


// Import Styles
import injectSheet from 'react-jss';
import { mobileLandingLayoutStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class MobileLandingLayout extends Component {

  goToPage(page, param) {
    this.props.goToPage(page, param);
  }

  scrollTo(section) {
    this.props.goToPage('landing');
    window.location.href = section;
  }

  render() {
    const
      { classes, app, showSidePanel, navBar } = this.props,
      style = classes.root;
    // alert(showSidePanel);

    return (
      <div className={style} >
        <div className="bkTone"></div>
        <video autoPlay muted loop className="movingLines">
          <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
        </video>

        {showSidePanel && <div id="mySidenav" className="sideNav">
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <i class="fa fa-bars fa-3x"></i>
          </button>
          <div className="menuWraper">
            {navBar.options.map(option =>
              <button
                key={option.name}
                className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`}
                onClick={() => this.scrollTo(option.pointTo)}
              >
                {option.caption}
              </button>
            )}
            <div className="hr"></div>
            <span className="privacy" onClick={() => this.goToPage('privacy')}>Privacy Policy<br/>Terms & Conditions</span>
          </div>
        </div>}
        <div>
          <HeaderContainer />
          {
            {
              landing: <Landing />,
              signUp: <SignUp />
            }[app.activePage.page]
          }
        </div>
      </div>

    );
  }
}

const
  stateToProps = state => ({
    app: state.app,
    showSidePanel: state.app.showSidenav,
    navBar: state.app.navBar
  }),
  dispatchToProps = dispatch => ({
    sideNavToggle: () => dispatch(actions.sideNavToggle()),
    goToPage: (page, params) => dispatch(actions.goToPage(page, params))
  });

export default connect(stateToProps, dispatchToProps)(injectSheet(mobileLandingLayoutStyle)(MobileLandingLayout));
