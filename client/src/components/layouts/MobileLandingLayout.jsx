import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Components
import { Menu } from '../functionals'
import { HeaderContainer } from '../containers';
import { Landing, SignUp, Contact } from '../pages/';


// Import Styles
import injectSheet from 'react-jss';
import { mobileLandingLayoutStyle } from './styles';

class MobileLandingLayout extends Component {
  state = {
    eDir: {
      d1:'mailto:in',
      d2:'fo@lqd',
      d3:'ex.com'
    }
  }

  eDir (props) {
    return(
      <a className="em" href={`${props.d1}${props.d2}${props.d3}`}>{`in${props.d2}${props.d3}`}</a>
    )
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

  itemSelection (item, itemArray) {
    return itemArray.find( element => element.name === item);
  }

  itemToRender (item, activeItem) {
    switch (item.type) {
      case 'link':
        return (
          <button 
            key={item.name}
            className={`${item.class} ${item.name === activeItem ? 'btnMenuActive' : ''}`} >
              <a className="btnLink navLink" href={item.href} target="_blank">
            {item.caption}
            </a>
          </button>
        )
      case 'linkIcon':
        return (
          <button
            key={item.name}
            className="btnMenuIcon"
            onClick={() => this.goTo(null, 'exchange')}
          >
            <a className='navLinkIcon' title={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
              <span ><i className={`fab ${item.icon} fa-2x`} ></i></span>
            </a>
          </button>
        )
      case 'dropdown':
        return (
          <div className="dropdown">
            <button className="dropMenu">{item.caption} <i class="fas fa-caret-down"></i></button>
            <div className="dropdownContent">
              {item.content.map(option => <a className="dropMenu dropMenuOption" href="https://medium.com/lqdex" target="_blank" >{option}</a>)}
            </div>
          </div>
        )
      default:
       return (
        <button
          key={item.name}
          className={`btnMenu ${item.name === activeItem ? 'btnMenuActive' : ''}`}
          onClick={() => this.goTo(item.pageTo, item.pointTo)}
        >
          {item.caption}
        </button>
       )
    }
  }

  render() {
    const
      { classes, app, showSidePanel, navBar, showBgVideo } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <div className="bkTone"></div>
        {showBgVideo && 
        <video autoPlay muted loop className="movingLines">
          <source src={require(`../../assets/img/movingLines${app.config.backgroundVideoRes}.mp4`)} type="video/mp4" />
        </video>}

        {showSidePanel && <div id="mySidenav" className="sideNav">
          <button className="menuButton" onClick={() => this.props.sideNavToggle()}>
            <i className="fa fa-bars fa-3x"></i>
          </button>
          <Menu />
          <div className="menuWraper">
            {/*navBar.options.map(option =>{

              if (!option.href) {
                return(
                  <button
                    key={option.name}
                    className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`}
                    onClick={() => this.goTo(option.pageTo, option.pointTo)}
                  >
                    {option.caption}
                  </button>
                )
              } else {
                return (
                  <button className={`btnMenu ${option.name === navBar.active ? 'btnMenuActive' : ''}`} >
                    <a className="btnLink" href={option.href} target="_blank">
                    {option.caption}
                    </a>
                  </button>
                )
              }
            }
          )*/}
            <div className="hr"></div>
            <div className="privacy" onClick={() => this.goTo('landing', 'exchange')}>
              <div className="copyRights">1541 Ocean Ave., Suite 200</div>
              <div className="copyRights">Santa Monica, CA 90401</div>
              <div className="copyRights">{this.eDir(this.state.eDir)}</div>
            </div>
          </div>
        </div>}
        <div>
          <HeaderContainer />
          {
            {
              landing: <Landing />,
              signUp: <SignUp />,
              contact: <Contact />
            }[app.activePage.page]
          }
        </div>
      </div>

    );
  }
}

const
  stateToProps = state => ({
    app: state.app,
    showSidePanel: state.app.showSidenav,
    navBar: state.app.navBar
  }),
  dispatchToProps = dispatch => ({
    sideNavToggle: () => dispatch(actions.sideNavToggle()),
    goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
    navBarActive: option => dispatch(actions.navBarActive(option))
  });

export default connect(stateToProps, dispatchToProps)(injectSheet(mobileLandingLayoutStyle)(MobileLandingLayout));
