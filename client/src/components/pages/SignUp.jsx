import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Redux actions
import actions from '../../redux/actions';

// Import containers
import {
} from '../containers/';

// Import Styles
import injectSheet from 'react-jss';
import { signUpStyle } from './styles';

// Import Assets
const FontAwesome = require('react-fontawesome');

class SignUp extends Component {
  state = {
    name:'',
    phone:'',
    email:''
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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

  send() {
    axios.post('/users/add', {
      name:this.state.name,
      email:this.state.email,
      phone: this.state.phone
    })
    .then(res=>console.log(res));    
  }

  render() {
    const
      { classes } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <div className="signUpWrapper">
          <div className="headerWrapper">
            <span className="firstLine">Subscribe for Updates</span>
            <button className="btnClose" onClick={() => this.goTo('exchange', 'landing')}><i className="fas fa-times fa-2x"></i></button>
          </div>
          <form>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-user"></i></div>
              <span className="inputBox">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoFocus
                  onChange={(event)=>this.handleInputChange(event)} />
              </span>
            </div>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-phone"></i></div>
              <span className="inputBox">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Numbre"
                  onChange={(event)=>this.handleInputChange(event)} />
              </span>

            </div>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-envelope"></i></div>
              <span className="inputBox">
                <input
                name="email"
                type="text"
                placeholder="Email"
                onChange={(event)=>this.handleInputChange(event)} />
              </span>
            </div>
          </form>
            <div className="buttonsWraper">
              <button className="btnCancel" onClick={() => this.goTo('exchange', 'landing')}> Cancel</button>
              <button className="btnSubscribe" onClick={() => this.send()}> Subscribe</button>
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

export default connect(stateToProps, dispatchToProps)(injectSheet(signUpStyle)(SignUp));
