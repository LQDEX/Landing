import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Modal } from '../functionals';

// Redux actions
import actions from '../../redux/actions';

// Import containers
import {
} from '../containers/';

// Import Styles
import injectSheet from 'react-jss';
import { signUpStyle } from './styles';

const errorMessages = {
    name: { required:'A name is required' },
    phone: { required:'' },
    email: { required:'An email is required',
             wrongEmail: 'Email wrong format' }
  
}

class SignUp extends Component {
  state = {
    canSubmit: false,
    nameValue:'',
    phoneValue:'',
    emailValue:'',
    modal: {
      showModal: false,
      message: '',
    },
    errors: {
      name:'',
      phone:'',
      email:''
    },
  }

  showModal = (message) => {
    const modal = {showModal: true, message};
    this.setState({ modal });
  };

  hideModal = () => {
    const modal = {showModal: false, message:''};
    this.setState({ modal });
  };

  handleSubmitButton() {
    const {nameValue, emailValue, phoneValue, errors} = this.state;
    const hasError = !!errors.name || !!errors.phone || !!errors.email
    const hasRequired = !!nameValue && !!emailValue;
    const canSubmit = hasRequired && !hasError;
    this.setState({canSubmit});

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[`${name}Value`]: value}, () => this.handleSubmitButton());
  }

  handelErrors(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let errors = this.state.errors;
    
    if (!value) {
      errors[name]=errorMessages[name].required
    }
    if (name === 'email' && value){
      const emaiRegex = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
      const isValidEmail = emaiRegex.test(value) ? true : false;
      if (!isValidEmail){
        errors[name]=errorMessages[name].wrongEmail
      }
    }
    this.setState(errors, () => this.handleSubmitButton());
  }

  resetErrors(event) {
    const target = event.target;
    const name = target.name;
    let errors = this.state.errors;
    errors[name]='';

    this.setState(errors, () => this.handleSubmitButton());
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
  
handleErrorMsg (error) {
  switch (error.errno) {
    case 1062: //Duplicate primary key (email)
      return 'You are already subscribed for updates.'
      break;
    case 500:
      return 'ERROR: an error occured, try again in a while'
      break;
    default:
      return `ERROR: ${error.errno} - ${error.sqlMessage}`
      break;
  }
}

  send() {
    axios.post('/users/add', {
      name:this.state.nameValue,
      email:this.state.emailValue,
      phone: this.state.phoneValue
    })
    .then(res => {
      const response = res.data;
      console.log(response);
      if (response.error) {
        this.showModal (this.handleErrorMsg(response.error));
      } else {
        this.showModal (`Thank you. We will keep you updated.`);
      }
    })
    .catch(err => this.showModal (this.handleErrorMsg({errno: 500})));
  }

  render() {
    const
      { classes } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <Modal show={this.state.modal.showModal} handleClose={() => this.hideModal()}>
          <p>{this.state.modal.message}</p>
        </Modal>
        <div className="signUpWrapper">
          <div className="headerWrapper">
            <span className="firstLine">Subscribe for Updates</span>
            <button className="btnClose" onClick={() => this.goTo('exchange', 'landing')}><i className="fas fa-times fa-2x"></i></button>
          </div>
          <form>
            <div className="fieldWrapper">
              <label >{this.state.errors.name}</label>
              <div className="inputWrapper inputError">
                <div className="inputIcon"><i className="fas fa-user"></i></div>
                <span className="inputBox">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoFocus
                    onFocus={(event)=>this.resetErrors(event)}
                    onBlur={(event)=>this.handelErrors(event)}
                    onChange={(event)=>this.handleInputChange(event)} />
                </span>
              </div>
            </div>
            <div className="fieldWrapper">
            <label >{this.state.errors.phone}</label>
            <div className="inputWrapper">
              <div className="inputIcon"><i className="fas fa-phone"></i></div>
              <span className="inputBox">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  onFocus={(event)=>this.resetErrors(event)}
                  onBlur={(event)=>this.handelErrors(event)}
                  onChange={(event)=>this.handleInputChange(event)} />
              </span>
            </div>
            </div>
            <div className="fieldWrapper">
            <label >{this.state.errors.email}</label>
            <div className="inputWrapper">
              <div className="inputIcon"><i className="fas fa-envelope"></i></div>
              <span className="inputBox">
                <input
                name="email"
                type="text"
                placeholder="Email"
                onFocus={(event)=>this.resetErrors(event)}
                onBlur={(event)=>this.handelErrors(event)}
                onChange={(event)=>this.handleInputChange(event)} />
              </span>
            </div>
            </div>
          </form>
            <div className="buttonsWrapper">
              <button className="btnCancel" onClick={() => this.goTo('exchange', 'landing')}> Cancel</button>
              <button className="btnSubscribe" disabled={!this.state.canSubmit} onClick={() => this.send()}> Subscribe</button>
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
