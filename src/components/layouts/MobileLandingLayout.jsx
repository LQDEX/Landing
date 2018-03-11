import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  HeaderContainer,
  WelcomeContainer,
  DetailedInfoContainer,
  RoadmapContainer,
  TeamAdvisorsContainer,
  InvestorsContainer,
  FooterContainer,
} from '../containers/';

//Import Styles
import injectSheet from 'react-jss';
import { mobileLandingLayoutStyle } from './styles';


// Import Assets
const FontAwesome = require('react-fontawesome');

class MobileLandingLayout extends Component {
  render() {
    const { classes, deviceType } = this.props;
    const style = classes.root;
    return (
      <div className={style} >
        <div className="bkTone"></div>
        <video autoPlay muted loop className="movingLines">
          <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
        </video>
        <div id="mySidenav" className="sideNav">
          <button className="menuButton">
            <FontAwesome
              name='bars'
              size='3x'
              spin={false}
            />
          </button>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
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

const stateToProps = state => {
  return {
    app: state.app
  };
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(mobileLandingLayoutStyle)(MobileLandingLayout));
