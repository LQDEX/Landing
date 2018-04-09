import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { roadmapStyle } from './styles';

const shapes = {
  desktop: [{ xP: 0.29, yP: 0.18 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 1.00 }, { xP: 0.65, yP: 0.86 }, { xP: 0.00, yP: 0.96 }, { xP: 0.00, yP: 0.10 }],
  mobile: [{ xP: 0.20, yP: 0.07 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 1.00 }, { xP: 0.65, yP: 0.95 }, { xP: 0.0, yP: 1.00 }, { xP: 0.0, yP: 0.05 }, { xP: 0.0, yP: 0.05 }],
  tablet: [{ xP: 0.20, yP: 0.07 }, { xP: 1.00, yP: 0.00 }, { xP: 1.00, yP: 1.00 }, { xP: 0.65, yP: 0.95 }, { xP: 0.0, yP: 1.00 }, { xP: 0.0, yP: 0.05 }, { xP: 0.0, yP: 0.05 }],

};

class Roadmap extends Component {
 
  state = {
    wWidth: window.innerWidth,
    wHeight: 1150
}

  isEven(value) {
    return value % 2 === 0;
  }

  isOdd(value) {
    return value % 2 !== 0;
  }

  toPoints(imgWidth, imgHeight, pointsArray) {
    const margin = { xm: 0, ym: 0 };
    let points = '';
    points += pointsArray.map(pPoint => `${(imgWidth - margin.xm) * pPoint.xP + margin.xm / 2} ${(imgHeight - margin.ym) * pPoint.yP + margin.ym / 2}`);

    return points;
  }

  render() {
    const { classes, roadmap, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      tablet: classes.tRoot,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style}>
          {/*<img src={require('../../assets/img/mountainsRoad.png')} alt="" />*/}
          <svg width={this.state.wWidth} height={this.state.wHeight} >
          <image id="svgImage" style={ { clipPath: `url(#roadMapShape)` } } width={this.state.wWidth} height={this.state.wHeight} preserveAspectRatio="none" xlinkHref={require(`../../assets/img/mountainsRoad.png`) } />
          <defs>
            <clipPath id={`roadMapShape`}><polygon points={this.toPoints(this.state.wWidth, this.state.wHeight, shapes[deviceType])}/></clipPath>
          </defs>
        </svg>
         <div className="overlay">
          <div className="firstLine">
            Roadmap
          </div>
          {roadmap.map((item, i) =>
            <div className="roadmapRow" key={`item${i}`}>
              <div className="roadmapLine exo">
                <div className="right">{this.isEven(i + 1) ? item.date : ''}</div>
                <div className={i > 0 ? 'dot' : ''}>
                  <img width={12} src={require('../../assets/img/oval.png')} alt="" />
                </div>
                <div className="left">{this.isOdd(i + 1) ? item.date : ''}</div>
              </div>
              <div className="roadmapLine arsenal">
                <div className="right">{this.isEven(i + 1) ? item.desc : ''}</div>
                {roadmap.length !== i + 1 && <div className="vLine">
                  <img width={12} height={70} src={require('../../assets/img/verticaline.png')} alt="" />
                </div>}
                <div className="left">{this.isOdd(i + 1) ? item.desc : ''}</div>
              </div>
            </div>)}
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({
  roadmap: state.roadmap.milestones,
  deviceType: state.app.platform.deviceType

});

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(roadmapStyle)(Roadmap));
