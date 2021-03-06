import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';


// Import containers
import {
  WelcomeContainer,
  DetailedInfoContainer,
  RoadmapContainer,
  AboutUsContainer,
  TeamAdvisorsContainer,
  InvestorsContainer,
  PressContainer,
  FooterContainer
} from '../containers/';

// Import Styles
// import injectSheet from 'react-jss';

class Landing extends Component {

  componentDidMount() {
    configureAnchors({
      offset: -200,
      scrollDuration: 500
    });

  }

  onEnterViewport() {
    alert('You are IN');
  }

  onExitViewport() {
    alert('You are OUT');
  }

  render() {
    return (
      <div>

        <div key="Welcome" >
          <ScrollableAnchor id={'exchange'}><WelcomeContainer/></ScrollableAnchor>
        </div>
        <div key="Detail" >
          <DetailedInfoContainer />
        </div>
        <div key="Press" >
          <ScrollableAnchor id={'press'}><PressContainer /></ScrollableAnchor>
        </div>
        <div key="About" >
          <ScrollableAnchor id={'aboutUs'}><AboutUsContainer /></ScrollableAnchor>
        </div>
        <div key="Roadmap" >
          <RoadmapContainer />
        </div>
        <div key="Team" >
          <TeamAdvisorsContainer />
        </div>
        <div key="Investors" >
          <InvestorsContainer />
        </div>
        <div key="Footer" >
          <FooterContainer />
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ });

const dispatchToProps = dispatch => ({ });

export default connect(stateToProps, dispatchToProps)(Landing);
