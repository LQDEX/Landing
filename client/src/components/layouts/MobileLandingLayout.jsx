import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Components
import { HeaderContainer } from '../containers';
import { Landing, SignUp, Contact } from '../pages/';


// Import Styles
import injectSheet from 'react-jss';
import { mobileLandingLayoutStyle } from './styles';

class MobileLandingLayout extends Component {
  state = {
    eDir: {
      d1:'mailto:in',
      d2:'fo@lqd',
      d3:'ex.com'
    }
  }

  eDir (props) {
    return(
      <a className="copyRights em" href={`${props.d1}${props.d2}${props.d3}`}>{`in${props.d2}${props.d3}`}</a>
    )
  }

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
            <i className="fa fa-bars fa-3x"></i>
          </button>
          <div className="menuWraper">
            {navBar.options.map(option =>
              <button
                key={option.name}
                className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`}
                onClick={() => this.goTo(option.pointTo, option.pageTo)}
              >
                {option.caption}
              </button>
            )}
            <div className="hr"></div>
            <div className="privacy" onClick={() => this.goTo('privacy', 'privacy')}>
              <div className="copyRights">1541 Ocean Ave., Suite 200</div>
              <div className="copyRights">Santa Monica, CA 90401</div>
              <div className="copyRights">{this.eDir(this.state.eDir)}</div>
            </div>
          </div>
        </div>}
        <div>
          <HeaderContainer />
          {
            {
              landing: <Landing />,
              signUp: <SignUp />,
              contact: <Contact />
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
    goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
    navBarActive: option => dispatch(actions.navBarActive(option))
  });

export default connect(stateToProps, dispatchToProps)(injectSheet(mobileLandingLayoutStyle)(MobileLandingLayout));
