import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';


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

  componentDidMount() {
    configureAnchors({
      offset: -100,
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
          <ScrollableAnchor id={'Welcome'}><WelcomeContainer/></ScrollableAnchor>
        </div>
        <div key="Detail" >
          <ScrollableAnchor id={'Detail'}><DetailedInfoContainer /></ScrollableAnchor>
        </div>
        <div key="Roadmap" >
          <ScrollableAnchor id={'Roadmap'}><RoadmapContainer /></ScrollableAnchor>
        </div>
        <div key="Team" >
          <ScrollableAnchor id={'Team'}><TeamAdvisorsContainer /></ScrollableAnchor>
        </div>
        <div key="Investors" >
          <ScrollableAnchor id={'Investors'}><InvestorsContainer /></ScrollableAnchor>
        </div>
        <div key="Footer" >
          <ScrollableAnchor id={'Footer'}><FooterContainer /></ScrollableAnchor>
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ });

const dispatchToProps = dispatch => ({ });

export default connect(stateToProps, dispatchToProps)(Landing);
