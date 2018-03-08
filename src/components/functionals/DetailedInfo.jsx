import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { detailedInfoStyle } from './styles';

const VideoBackground = (props) => (<video autoPlay muted loop className="movingLines">
  <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
</video>)

class DetailedInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="infoRow">
          <VideoBackground />
          <div className="overlay">
            <div className="textBlockLeft">
              <p className="firstLine">Secure & Risk Free</p>
              <span className="txtBody">
                {`Introducing a `}
                <span className="txtHighlight">{`proof of stake blockchain`}</span>
                {` which will enable counter party risk free trading of cross chain digital assets through the issuing of `}
                <span className="txtHighlight">{`proxy tokens`}</span>.
            </span>
            </div>
            <div className="imgBlockTop">
              <img src={require('../../assets/img/dummy689x499.png')} alt="risksAnim" className="traslucent80" />
              <div className="topWindow"></div>
            </div>
          </div>
        </div>
        <div className="infoRow">
          <VideoBackground />
          <div className="overlay">
            <div className="imgBlockBottom">
              <img src={require('../../assets/img/flyingWallets.gif')} alt="walletsAnim" className="traslucent80" />
              <div className="bottomWindow"></div>
            </div>
            <div className="textBlockRight">
              <p className="firstLine">Transparency</p>

              <span className="txtBody">
                {'LiquidX does not take custody of your proxy tokens or external blockchain tokens.'}
                <br />
                {' Instead,'} <span className="txtHighlight">{`we provide you with your own LiquidX wallet`}</span>
                {` to safely and securely hold any tokens involved in the exchange.`}
              </span>
            </div>
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

export default connect(stateToProps, dispatchToProps)(injectSheet(detailedInfoStyle)(DetailedInfo));