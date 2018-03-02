import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { roadmapStyle } from './styles';

class Roadmap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <img src={require('../../assets/img/mountainsRoad.png')} alt="" />
        </div>
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

export default connect(stateToProps, dispatchToProps)(injectSheet(roadmapStyle)(Roadmap));