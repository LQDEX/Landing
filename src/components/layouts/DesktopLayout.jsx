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

export default connect(stateToProps, dispatchToProps)(injectSheet(desktopLayoutStyle)(DesktopLayout));
