import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { headerStatsStyle } from './styles';

class HeaderStats extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        HeaderStats Functional Component
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(headerStatsStyle)(HeaderStats));
