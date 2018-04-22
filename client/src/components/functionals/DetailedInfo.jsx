import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { palette, detailedInfoStyle } from './styles';

const shapes = {
  desktopT: [{ xP: 0.00, yP: 0.00 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 0.19 }, { xP: 0.75, yP: 0.00 }, { xP: 0.00, yP: 1.00 }, { xP: 1.00, yP: 0.82 }, { xP: 1.00, yP: 1.00 }, { xP: 0.00, yP: 1.00 }],
  mobileT: [{ xP: 0.00, yP: 0.00 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 0.10 }, { xP: 0.65, yP: 0.00 }, { xP: 0.00, yP: 0.65 }, { xP: 0.00, yP: 0.95 }, { xP: 1.00, yP: 0.80 }, { xP: 1.00, yP: 1.00 }, { xP: 0.00, yP: 1.00 }],
  tabletT: [{ xP: 0.00, yP: 0.00 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 0.10 }, { xP: 0.65, yP: 0.00 }, { xP: 0.00, yP: 0.65 }, { xP: 0.00, yP: 0.95 }, { xP: 1.00, yP: 0.80 }, { xP: 1.00, yP: 1.00 }, { xP: 0.00, yP: 1.00 }],
  
  desktopB: [{ xP: 0.00, yP: 0.00 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 1.00 }, { xP: 0.00, yP: 1.00 }, { xP: 0.00, yP: 0.40 }, { xP: 0.40, yP: 1.00 }, { xP: 0.90, yP: 0.50 }, { xP: 0.75, yP: 0.00 }, { xP: 0.00, yP: 0.13 }],
  mobileB: [{ xP: 0.00, yP: 0.00 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 1.00 }, { xP: 0.00, yP: 1.00 }, { xP: 0.00, yP: 0.40 }, { xP: 0.50, yP: 0.99 }, { xP: 1.00, yP: 0.60 }, { xP: 1.00, yP: 0.15 }, { xP: 0.90, yP: 0.00 }, { xP: 0.00, yP: 0.13 }],
  tabletB: [{ xP: 0.00, yP: 0.00 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 1.00 }, { xP: 0.00, yP: 1.00 }, { xP: 0.00, yP: 0.40 }, { xP: 0.50, yP: 0.99 }, { xP: 1.00, yP: 0.60 }, { xP: 1.00, yP: 0.15 }, { xP: 0.90, yP: 0.00 }, { xP: 0.00, yP: 0.13 }],
};

class DetailedInfo extends Component {
  state = {
    wWidth: 600,
    wHeight: 600
}
  
  toPoints(imgWidth, imgHeight, pointsArray) {
    const margin = { xm: 0, ym: 0 };
    let points = '';
    points += pointsArray.map(pPoint => `${(imgWidth - margin.xm) * pPoint.xP + margin.xm / 2} ${(imgHeight - margin.ym) * pPoint.yP + margin.ym / 2}`);

    return points;
  }

  updateWindowsDim() { 
      if (this.props.deviceType === 'mobile') {
        this.setState({wWidth: window.innerWidth});
      } else {
        this.setState({wWidth: 600})
      };
      console.log(this.state.wWidth, this.state.deviceType);
    }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateWindowsDim());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowsDim.bind(this));
  }

  render() {
    const { classes, deviceType } = this.props,
      style = {
        desktop: classes.root,
        tablet: classes.tRoot,
        mobile: classes.mRoot
      }[deviceType];

    return (
      <div className={style}>
        <div className="infoRow">
          <div className="textBlockLeft">
            <p className="firstLine">Secure & Risk Free</p>
            <span className="txtBody">
              {`Introducing a `}
              <span className="txtHighlight">{`proof of stake blockchain`}</span>
              {` that will enable counter party risk free trading of cross-chain digital assets through the issuing of `}
              <span className="txtHighlight">{`proxy tokens`}</span>.
            </span>
          </div>
          <div className="imgBlockTop">
            <svg width={this.state.wWidth} height={this.state.wHeight} >
              <image width={this.state.wWidth} height={this.state.wHeight} xlinkHref={require(`../../assets/img/flyingCoins.gif`) } />
              <polygon style={ { fill: palette.globalBackground } }points={this.toPoints(this.state.wWidth, this.state.wHeight, shapes[`${deviceType}T`])}/>
            </svg>
          </div>
        </div>
        <div className="infoRow">
          {deviceType === 'mobile' && <div className="textBlockRight">
            <p className="firstLine">Transparency</p>

            <span className="txtBody">
              {'LQDEX does not take custody of your proxy tokens or external blockchain tokens.'}
              {' Instead,'} <span className="txtHighlight">{`we provide you with your own LQDEX wallet`}</span>
              {` to safely and securely hold any tokens involved in the exchange.`}
            </span>
          </div>}
          <div className="imgBlockBottom">
            <svg width={this.state.wWidth} height={this.state.wHeight} >
              <image width={this.state.wWidth} height={this.state.wHeight} xlinkHref={require(`../../assets/img/flyingWallets.gif`) } />
              <polygon style={ { fill: palette.globalBackground } }points={this.toPoints(this.state.wWidth, this.state.wHeight, shapes[`${deviceType}B`])}/>
            </svg>
          </div>
          {deviceType !== 'mobile' && <div className="textBlockRight">
            <p className="firstLine">Transparency</p>
            <span className="txtBody">
              {'LQDEX does not take custody of your proxy tokens or external blockchain tokens.'}
              {' Instead,'} <span className="txtHighlight">{`we provide you with your own LQDEX wallet`}</span>
              {` to safely and securely hold any tokens involved in the exchange.`}
            </span>
          </div>}
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(detailedInfoStyle)(DetailedInfo));
