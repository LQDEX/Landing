import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { roadmapStyle } from './styles';

const roadmap = [
  {
    date: 'January 2018',
    desc: 'Project started'
  }, {
    date: 'March 2018',
    desc: 'Functional demo completed'
  }, {
    date: 'April 2018',
    desc: 'Public whitepaper published'
  }, {
    date: 'June 2018',
    desc: 'Token sale'
  }, {
    date: 'October 2018',
    desc: 'First prototype completed'
  }, {
    date: 'January 2019',
    desc: 'Launch!'
  },
]

class Roadmap extends Component {

  isEven(value) { return value % 2 === 0 };
  isOdd(value) { return value % 2 !== 0 };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="imgClip">
          <img src={require('../../assets/img/mountainsRoad.png')} alt="" />
        </div>
        <div className="overlay">
          <div className="firstLine">
            Roadmap
          </div>
          {roadmap.map((item, i) =>
            <div className="roadmapRow">
              <div className="roadmapLine exo">
                <div className="right">{this.isEven(i + 1) ? item.date : ''}</div>
                <div className={i > 0 ? 'dot' : ''}>
                  <img width={12} src={require('../../assets/img/oval.png')} alt="" />
                </div>
                <div className="left">{this.isOdd(i + 1) ? item.date : ''}</div>
              </div>
              <div className="roadmapLine arsenal">
                <div className="right">{this.isEven(i + 1) ? item.desc : ''}</div>
                {roadmap.length !== i + 1 && (<div className="vLine">
                  <img width={12} height={70} src={require('../../assets/img/verticaline.png')} alt="" />
                </div>)}
                <div className="left">{this.isOdd(i + 1) ? item.desc : ''}</div>
              </div>
            </div>)}
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