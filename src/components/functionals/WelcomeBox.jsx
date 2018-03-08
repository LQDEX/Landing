import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { welcomeBoxStyle } from './styles';

class WelcomeBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <video autoPlay muted loop className="movingLines">
          <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="imageWrap">
            <img className="macBook" src={require('../../assets/img/macbookScreen.png')} alt="" />
          </div>
          <div className="textArea ">
            <span className="firstLine">Title of the Exchange</span>
            <span className="txtBody">DECENTRALIZED</span>
            <span className="txtBody">TRUSTLESS</span>
            <span className="txtBody">CROSS CHAIN EXCHANGE</span>
          </div>

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

export default connect(stateToProps, dispatchToProps)(injectSheet(welcomeBoxStyle)(WelcomeBox));