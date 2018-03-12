import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Redux actions
import actions from '../../redux/actions';

import {
  HeaderContainer,
  WelcomeContainer,
  DetailedInfoContainer,
  RoadmapContainer,
  TeamAdvisorsContainer,
  InvestorsContainer,
  FooterContainer
} from '../containers/';

// Import Styles
import injectSheet from 'react-jss';
import { mobileLandingLayoutStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class MobileLandingLayout extends Component {

  render() {
    const
      { classes, showSidePanel } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <div className="bkTone"></div>
        <video autoPlay muted loop className="movingLines">
          <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
        </video>

        {showSidePanel && <div id="mySidenav" className="sideNav">
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <FontAwesome
              name="bars"
              size="3x"
              spin={false}
            />
          </button>
          <div className="menuWraper">
            <Link to="#"><button className="btnMenu">EXCHANGE</button></Link>
            <Link to="#"><button className="btnMenu">ABOUT US</button></Link>
            <div className="hr"></div>
            <Link to="#"><span className="privacy">Privacy Policy<br/>Terms & Conditions</span></Link>
          </div>
        </div>}
        <div>
          <HeaderContainer />
          <WelcomeContainer />
          <DetailedInfoContainer />
          <RoadmapContainer />
          <TeamAdvisorsContainer />
          <InvestorsContainer />
          <FooterContainer />
        </div>
      </div>

    );
  }
}

const
  stateToProps = state => ({
    app: state.app,
    showSidePanel: state.app.showSidenav
  }),
  dispatchToProps = dispatch => ({ sideNavToggle: () => dispatch(actions.sideNavToggle()) });

export default connect(stateToProps, dispatchToProps)(injectSheet(mobileLandingLayoutStyle)(MobileLandingLayout));
