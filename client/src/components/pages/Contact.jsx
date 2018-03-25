import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import containers
import {
} from '../containers/';

// Import Styles
import injectSheet from 'react-jss';
import { ContactStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class Contact extends Component {

  goToPage(page, param) {
    this.props.goToPage(page, param);
  }

  goTo(section, page) {
    if (page) {
      this.props.goToPage(page, null);
    }
    if (section) {
      this.props.navBarActive(section);
      window.location.href = `#${section}`;
    }
  }

  render() {
    const
      { classes } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <div className="signUpWrapper">
          <div className="headerWrapper">
            <span className="firstLine">Get in Touch</span>
            <button className="btnClose" onClick={() => this.goTo('exchange', 'landing')}><i class="fas fa-times fa-2x"></i></button>
          </div>
          <div className="inputWraper">
            <div className="inputIcon"><i class="fas fa-user"></i></div>
            <span className="inputBox">
              <input type="text" name="name" placeHolder="Name" autofocus/>
            </span>
          </div>
          <div className="inputWraper">
            <div className="inputIcon"><i class="fas fa-envelope"></i></div>
            <span className="inputBox">
              <input type="text" name="phone" placeHolder="Email Address" autofocus/>
            </span>

          </div>
          <textarea className="message" rows="4" cols="50" name="message" placeHolder="Message" form="usrform"></textarea>
          <div className="buttonsWraper">
            <button className="btnCancel" onClick={() => this.goTo('exchange', 'landing')}> Cancel</button>
            <button className="btnSubscribe"> Subscribe</button>
          </div>


        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ });

const dispatchToProps = dispatch => ({
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(ContactStyle)(Contact));
