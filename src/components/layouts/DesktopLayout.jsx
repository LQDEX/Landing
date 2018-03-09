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
import { desktopLayoutStyle } from './styles';


class DesktopLayout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="wrapper">
          <video autoPlay muted loop className="movingLines">
            <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
          </video>
          <div className="overlay">
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

export default connect(stateToProps, dispatchToProps)(injectSheet(desktopLayoutStyle)(DesktopLayout));
