import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoCover } from 'react-video-cover';

//Import Styles
import injectSheet from 'react-jss';
import { welcomeBoxStyle } from './styles';

class WelcomeBox extends Component {
  render() {
    const { classes } = this.props;
    const videoOptions = {
      src: require('../../assets/img/movingLines.mp4'),
    };
    return (
      <div className={classes.root} >
        {/*<VideoCover /> || null */}
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
      </div >
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