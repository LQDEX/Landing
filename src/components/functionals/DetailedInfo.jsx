import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { detailedInfoStyle } from './styles';

class DetailedInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="infoRow">
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
            <img src={require('../../assets/img/bgLong.gif')} alt="risksAnim" className="traslucent80" />
          </div>
        </div>
        <div className="infoRow">
          <div className="imgBlockBottom">
            <img src={require('../../assets/img/bg.gif')} alt="walletsAnim" className="traslucent80" />
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