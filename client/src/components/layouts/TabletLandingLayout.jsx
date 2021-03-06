import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

// Imports Containers


//Import Styles

import { tabletLandingLayoutStyle } from './styles';


class MobileLayout extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        MobileLayout
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(
  injectSheet(tabletLandingLayoutStyle)(MobileLayout)
);
