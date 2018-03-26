import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { welcomeBoxStyle } from './styles';

class WelcomeBox extends Component {
  goToPage(page, param) {
    this.props.goToPage(page, param);
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
        <div className="imgClip">
          {deviceType !== 'mobile' && <img src={require('../../assets/img/dummy1920x800.png')} alt="" />}
          {deviceType === 'mobile' && <img src={require('../../assets/img/dummy1920x800.png')} alt="" />}
        </div>
        <div className="overlay">
          {deviceType === 'mobile' && <div className="textArea ">
            <span className="firstLine">LQDEX</span>
          </div>}

          <div className="imageWrap">
            <img className="macBook" src={require('../../assets/img/macbookScreen.png')} alt="" />
          </div>
          <div className="textArea ">
            {deviceType !== 'mobile' && <span className="firstLine">LQDEX</span>}
            <span className="txtBody">DECENTRALIZED</span>
            <span className="txtBody">TRUSTLESS</span>
            <span className="txtBody">CROSS CHAIN EXCHANGE</span>
          </div>
          {deviceType === 'mobile' && <button className="btnSubscribe" onClick={() => this.goToPage('signUp')}>Sign up for Updates</button>}
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({ goToPage: (page, params) => dispatch(actions.goToPage(page, params)) });

export default connect(stateToProps, dispatchToProps)(injectSheet(welcomeBoxStyle)(WelcomeBox));
