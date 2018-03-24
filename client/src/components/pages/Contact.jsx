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

  render() {
    const
      { classes } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <div className="signUpWrapper">
          <div className="closeWrapper">
            <button className="btnClose" onClick={() => this.goToPage('landing')}>
              <FontAwesome
                name="times"
                size="2x"
                spin={false}
              />
            </button>
          </div>
          <div className="headerWrapper">
            <span className="firstLine">CONTACT</span>
          </div>
          <div className="inputWraper">
            <div className="inputIcon"><FontAwesome name="user" size="1x" spin={false} /></div>
            <span className="inputBox">
              <input type="text" name="firstname" placeHolder="Name" autofocus/>
            </span>
          </div>
          <div className="inputWraper">
            <div className="inputIcon"><FontAwesome name="phone" size="1x" spin={false} /></div>
            <span className="inputBox">
              <input type="text" name="firstname" placeHolder="Phone Numbre" autofocus/>
            </span>

          </div>
          <div className="inputWraper">
            <div className="inputIcon"><FontAwesome name="envelope" size="1x" spin={false} /></div>
            <span className="inputBox">
              <input type="text" name="firstname" placeHolder="Email" autofocus/>
            </span>

          </div>
          <div></div>


        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ });

const dispatchToProps = dispatch => ({ goToPage: (page, params) => dispatch(actions.goToPage(page, params)) });

export default connect(stateToProps, dispatchToProps)(injectSheet(ContactStyle)(Contact));
