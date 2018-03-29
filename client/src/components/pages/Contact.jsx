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
import { ContactStyle } from './styles';

class Contact extends Component {
  state = {
    name:'',
    phone:'',
    email:'',
    message:''
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
    axios.post('/messages/add', {
      name:this.state.name,
      email:this.state.email,
      phone: this.state.phone,
      message: this.state.message
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
            <span className="firstLine">Get in Touch</span>
            <button className="btnClose" onClick={() => this.goTo('exchange', 'landing')}><i className="fas fa-times fa-2x"></i></button>
          </div>
          <form>
          <div className="inputWraper">
            <div className="inputIcon"><i className="fas fa-user"></i></div>
            <span className="inputBox">
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoFocus
                onChange={event => this.handleInputChange(event)} />
            </span>
          </div>
          <div className="inputWraper">
            <div className="inputIcon"><i className="fas fa-envelope"></i></div>
            <span className="inputBox">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={event => this.handleInputChange(event)} />
            </span>
          </div>
          <div className="inputWraper">
            <div className="inputIcon"><i className="fas fa-phone"></i></div>
            <span className="inputBox">
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                onChange={event => this.handleInputChange(event)} />
            </span>
          </div>
          <textarea
            className="message"
            rows="4" cols="50"
            name="message"
            placeholder="Message"
            form="usrform"
            onChange={event => this.handleInputChange(event)}>
          </textarea>
          </form>
          <div className="buttonsWraper">
            <button className="btnCancel" onClick={() => this.goTo('exchange', 'landing')}> Cancel</button>
            <button className="btnSubscribe" onClick={() => this.send()}>Send</button>
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
