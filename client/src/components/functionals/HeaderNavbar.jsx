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
    const { classes, deviceType, navBar } = this.props;

    return (
      <div className={classes.root}>
        <img className="logo" src={require('../../assets/img/logoLiquidx.png')} alt="Logo" onClick={() => this.goTo('landing', 'exchange')}/>
        {deviceType !== 'mobile' &&
           <div className="menuWraper">
            {navBar.menuDef.map(item => {
              const itemObj = this.itemSelection(item, navBar.items);
              return this.itemToRender(itemObj, navBar.active)
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
