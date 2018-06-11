import React, { Component } from 'react';
import { connect } from 'react-redux';


// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { palette, welcomeBoxStyle } from './styles';
     
import { WelcomeForm } from '.';

const shapes = {
  desktop: [{ xP: 0.00, yP: 1.00 }, { xP: 0.67, yP: 0.84 }, { xP: 1.00, yP: 1.00 }],
  mobile: [{ xP: 0.00, yP: 1.00 }, { xP: 0.77, yP: 0.94 }, { xP: 1.00, yP: 0.98 }, { xP: 1.00, yP: 1.00 }],
  tablet: [{ xP: 0.00, yP: 1.00 }, { xP: 0.90, yP: 0.90 }, { xP: 1.00, yP: 0.94 }, { xP: 1.00, yP: 1.00 }]
};

class WelcomeBox extends Component {
  state = {
      wWidth: window.innerWidth,
      wHeight: 850
  }

  goToPage(page, param) {
    this.props.goToPage(page, param);
  }

  goTo(page, section) {
    if (page) {
      this.props.goToPage(page, null);
    }
    if (section) {
      this.props.navBarActive(section);
      window.location.href = `#${section}`;
    }
  }

  toPoints(imgWidth, imgHeight, pointsArray) {
    const margin = { xm: 0, ym: 0 };
    let points = '';
    points += pointsArray.map(pPoint => `${(imgWidth - margin.xm) * pPoint.xP + margin.xm / 2} ${(imgHeight - margin.ym) * pPoint.yP + margin.ym / 2}`);

    return points;
  }

  updateWindowsDim() {
    return this.setState({
      wWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateWindowsDim());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowsDim.bind(this));
  }

  render() {
    const
      { classes, deviceType } = this.props,
      style = {
        desktop: classes.root,
        tablet: classes.tRoot,
        mobile: classes.mRoot
      }[deviceType];
 
    return (
      <div className={style} >
        <svg width={this.state.wWidth} height={this.state.wHeight} >
          <polygon style={ { fill: palette.globalBackground } } points={this.toPoints(this.state.wWidth, this.state.wHeight, shapes[deviceType])}/>
        </svg>

        <div className="overlay">
          <div className="imageWrap">
            <img className="macBook" src={require('../../assets/img/macbookScreen.png')} alt="" />
          </div>
          <div className="textWrap">
            <div className="textArea ">
              <span className="firstLine">LQDEX</span>
              <span className="txtBody">DECENTRALIZED</span>
              <span className="txtBody">TRUSTLESS</span>
              <span className="txtBody">CROSS-CHAIN EXCHANGE</span>
            </div>
            <div className="subscribeArea">
              <WelcomeForm deviceType={deviceType}/>
            </div>
          </div>

          {deviceType === 'mobile' &&
            <button className="btnWhitepaper" >
              <a className="btnLink" href={require('../../assets/doc/LQDEX-White-Paper.pdf')} target="_blank">
              WHITEPAPER
              </a>
            </button>
          }
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(welcomeBoxStyle)(WelcomeBox));
