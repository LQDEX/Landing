import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import containers
import {
  WelcomeContainer,
  DetailedInfoContainer,
  RoadmapContainer,
  TeamAdvisorsContainer,
  InvestorsContainer,
  FooterContainer
} from '../containers/';

// Import Styles
// import injectSheet from 'react-jss';

class Landing extends Component {
  render() {
    return (
      <div>
        <WelcomeContainer />
        <DetailedInfoContainer />
        <RoadmapContainer />
        <TeamAdvisorsContainer />
        <InvestorsContainer />
        <FooterContainer />
      </div>
    );
  }
}

const stateToProps = state => ({ });

const dispatchToProps = dispatch => ({ });

export default connect(stateToProps, dispatchToProps)(Landing);
