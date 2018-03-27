import React, { Component } from 'react';
import { connect } from 'react-redux';


// Import Components
import { HeaderContainer } from '../containers';
import { Landing, SignUp, Contact } from '../pages/';

// Import Styles
import injectSheet from 'react-jss';
import { desktopLandingLayoutStyle } from './styles';


class DesktopLayout extends Component {
  render() {
    // const { classes, deviceType } = this.props;
    const
      { classes, app } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <div className="bkTone"></div>
        <video autoPlay muted loop className="movingLines">
          <source src={require('../../assets/img/movingLines.mp4')} type="video/mp4" />
        </video>
        <div>
          <HeaderContainer />
          <div>
            {
              {
                landing: <Landing />,
                signUp: <SignUp />,
                contact: <Contact />
              }[app.activePage.page]
            }
          </div>
        </div>
      </div>

    );
  }
}

const stateToProps = state => ({ app: state.app });

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(desktopLandingLayoutStyle)(DesktopLayout));
