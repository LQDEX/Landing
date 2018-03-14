import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { roadmapStyle } from './styles';

class Roadmap extends Component {

  isEven(value) {
    return value % 2 === 0;
  }

  isOdd(value) {
    return value % 2 !== 0;
  }

  render() {
    const { classes, roadmap, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      tablet: classes.root,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style}>
        <div className="imgClip">
          <img src={require('../../assets/img/mountainsRoad.png')} alt="" />
        </div>
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

const dispatchToProps = dispatch => ({
});

export default connect(stateToProps, dispatchToProps)(injectSheet(roadmapStyle)(Roadmap));
