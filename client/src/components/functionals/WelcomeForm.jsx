import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { palette, welcomeFormStyle } from './styles';

const shapes = {
  desktop: [{ xP: 0.00, yP: 0.00 }, { xP: 0.67, yP: 0.14 }, { xP: 1.00, yP: 1.00 }],
  mobile:  [{ xP: 0.00, yP: 1.00 }, { xP: 0.77, yP: 0.94 }, { xP: 1.00, yP: 0.98 }, { xP: 1.00, yP: 1.00 }],
  tablet:  [{ xP: 0.00, yP: 1.00 }, { xP: 0.90, yP: 0.90 }, { xP: 1.00, yP: 0.94 }, { xP: 1.00, yP: 1.00 }]
};

class WelcomeForm extends Component {
  state = {
    wWidth: 500,
    wHeight: 80,
    emailValue:'',
    formFieldStatus: {
      email:{
        touched: false
      },
    },
    formErrors: {
      email:'ljhlskdjf'
    },
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
        {/* <svg width={this.state.wWidth} height={this.state.wHeight} >
          <polygon style={ { fill: palette.globalBackground } } points={this.toPoints(this.state.wWidth, this.state.wHeight, shapes[deviceType])}/>
        </svg> */}
        <div className="formWrap">
          <form>
              <div className="inputWrapper">
                <span className="inputBox">
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onFocus={(event)=>this.resetErrors(event)}
                    onBlur={(event)=>this.handelErrors(event)}
                    onChange={(event)=>this.handleInputChange(event)} />
                </span>
                <button className="btnSubscribe" disabled={!this.state.canSubmit} onClick={() => this.send()}> Subscribe</button>
              </div>
          </form>
        </div>
        <div  className="errorLabel">
          <label >{this.state.formErrors.email}</label>
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

export default connect(stateToProps, dispatchToProps)(injectSheet(welcomeFormStyle)(WelcomeForm));
