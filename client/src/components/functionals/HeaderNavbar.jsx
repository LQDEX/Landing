import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { headerNavbarStyle } from './styles';

class HeaderNavbar extends Component {

  goTo( page, section) {
    if (page) {
      this.props.goToPage(page, null);
    }
    if (section) {
      this.props.navBarActive(section);
      window.location.href = `#${section}`;
    }
  }

  render() {
    const { classes, deviceType, navBar } = this.props;

    return (
      <div className={classes.root}>
        <img className="logo" src={require('../../assets/img/logoLiquidx.png')} alt="Logo" onClick={() => this.goTo('landing', 'exchange')}/>
        {deviceType !== 'mobile' &&
           <div className="menuWraper">

            {navBar.options.map(option => {
              switch (option.type) {
                case 'link':
                  return (
                    <button 
                      key={option.name}
                      className={`${option.class} ${option.name === navBar.active ? 'btnMenuActive' : ''}`} >
                        <a className="btnLink navLink" href={option.href} target="_blank">
                      {option.caption}
                      </a>
                    </button>
                  )
                case 'linkIcon':
                  return (
                    <button
                      key={option.name}
                      className="btnMenuIcon"
                      onClick={() => this.goTo(null, 'exchange')}
                    >
                      <a className='navLinkIcon' title="JOIN US ON TELEGRAM" href="https://t.me/LQDEX" target="_blank" rel="noopener noreferrer">
                        <span ><i className="fab fa-telegram-plane fa-2x" ></i></span>
                      </a>
                    </button>
                  )
                default:
                 return (
                  <button
                    key={option.name}
                    className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`}
                    onClick={() => this.goTo(option.pageTo, option.pointTo)}
                  >
                    {option.caption}
                  </button>
                 )
              }
            })}
          </div>
        }
        {deviceType === 'mobile' &&
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <i className="fas fa-bars fa-3x"></i>

          </button>
        }
      </div>
    );
  }
}

const stateToProps = state => ({
  activePage: state.app.activePage,
  deviceType: state.app.platform.deviceType,
  navBar: state.app.navBar
});

const dispatchToProps = dispatch => ({
  sideNavToggle: () => dispatch(actions.sideNavToggle()),
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(headerNavbarStyle)(HeaderNavbar));
