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
    const { classes, deviceType, activePage, navBar } = this.props;

    return (
      <div className={classes.root}>
        <img className="logo" src={require('../../assets/img/logoLiquidx.png')} alt="Logo" onClick={() => this.goTo('landing', 'exchange')}/>
        {deviceType !== 'mobile' &&
           <div className="menuWraper">
            {/*navBar.options.map(option =>
              <button
                key={option.name}
                className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`}
                onClick={() => this.goTo(option.pageTo, option.pointTo)}
              >
                {option.caption}
              </button>
            )*/}

            <button
                key={'aboutUs'}
                className={`btnMenu ${'aboutUs' === navBar.active ? 'btnMenuActive' : ''}`}
                onClick={() => this.goTo('landing', 'aboutUs')}
              >
                {'ABOUT US'}
            </button>

              <button className="btnSubscribe" >
                <a className="btnLink" href={require('../../assets/doc/LQDEX-White-Paper.pdf')} target="_blank">
                  Whitepaper
                </a>
              </button>
            

            <button
                key={'blog'}
                className={`btnMenu ${'blog' === navBar.active ? 'btnMenuActive' : ''}`}
                onClick={() => this.goTo(null, 'exchange')}
              >
              <a className="navLink" href="https://medium.com/lqdex" target="_blank">{'BLOG'}</a>
            </button>

            <button
                key={'contact'}
                className={`btnMenu ${'contact' === navBar.active ? 'btnMenuActive' : ''}`}
                onClick={() => this.goTo('contact', 'contact')}
              >
                {'CONTACT'}
            </button>

            <button
                key={'telegram'}
                className="btnMenuIcon"
                onClick={() => this.goTo(null, 'exchange')}
              >
              <a className='navLinkIcon' href="https://t.me/LQDEX" target="_blank">
              JOIN US ON TELEGRAM <span className="iconMargin"><i className="fab fa-telegram-plane fa-2x" ></i></span>
              </a>
            </button>

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
