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
import { ContactStyle } from './styles';

const errorMessages = {
  name: { required:'Required field.' },
  phone: { required:'' },
  email: { required:'Required field.',
           wrongEmail: 'Email address in invalid format' },
  message: {required:'Required field.' },

}

class Contact extends Component {
  state = {
    nameValue:'',
    phoneValue:'',
    emailValue:'',
    messageValue:'',
    modal: {
      showModal: false,
      message: '',
    },
    canSubmit: true,
    formFieldStatus: {
      name:{
        touched: false
      },
      phone:{
        touched: false
      },
      email:{
        touched: false
      },
      message:{
        touched: false
      },
    },
    formErrors: {
      name:'',
      phone:'',
      email:'',
      message:''
    }
  }

  showModal = (message) => {
    const modal = {showModal: true, message};
    this.setState({ modal });
  };

  hideModal = () => {
    const modal = {showModal: false, message:''};
    this.setState({ modal });
  };

  handleSubmitButton(){
    const {nameValue, emailValue, messageValue, formErrors} = this.state;
    const hasError = !!formErrors.name || !!formErrors.phone || !!formErrors.email || !!formErrors.message;
    const hasRequired = !!nameValue && !!emailValue && !!messageValue;
    const canSubmit = hasRequired && !hasError;
    this.setState({canSubmit});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const formFieldStatus = this.state.formFieldStatus[name];
    formFieldStatus.touched = true;
    this.setState(formFieldStatus);
    this.setState({[`${name}Value`]: value}, () => this.handleSubmitButton());

  }

  handelErrors(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const fieldState = this.state.formFieldStatus[name];
    let errors = this.state.formErrors

    if (!value && fieldState.touched) {
      errors[name]=errorMessages[name].required
    }
    if (name === 'email' && value){
      const emaiRegex = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-zA-Z][a-zA-Z-0-9]*\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
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
    let errors = this.state.formErrors;
    errors[name]='';

    this.setState(errors, () => this.handleSubmitButton());
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
  
  handleErrorMsg (error) {
    switch (error.errno) {
      case 1062: //Duplicate primary key (email)
        return 'You are already subscribed, Thank you.'
      case 500:
        return 'ERROR: an error occured, try again in a while'
      default:
        return `ERROR: ${error.errno} - ${error.sqlMessage}`
    }
  }

  send() {
    axios.post('/messages/add', {
      name:this.state.nameValue,
      email:this.state.emailValue,
      phone: this.state.phoneValue,
      message: this.state.messageValue,
    })
    .then(res => {
      const response = res.data;
      // console.log(response);
      if (response.error) {
        this.showModal (this.handleErrorMsg(response.error));
      } else {
        this.showModal (`Message received!`);
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
            <span className="firstLine">Contact</span>
            <button className="btnClose" onClick={() => this.goTo('landing', 'exchange')}><i className="fas fa-times fa-2x"></i></button>
          </div>
          <form>
          <div className="fieldWrapper">
            <label >{this.state.formErrors.name}</label>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-user"></i></div>
              <span className="inputBox">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoFocus
                  onFocus={(event)=>this.resetErrors(event)}
                  onBlur={(event)=>this.handelErrors(event)}
                  onChange={event => this.handleInputChange(event)} />
              </span>
            </div>
          </div>
          <div className="fieldWrapper">
            <label >{this.state.formErrors.email}</label>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-envelope"></i></div>
              <span className="inputBox">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onFocus={(event)=>this.resetErrors(event)}
                  onBlur={(event)=>this.handelErrors(event)}
                  onChange={event => this.handleInputChange(event)} />
              </span>
            </div>
          </div>
          <div className="fieldWrapper">
            <label >{this.state.formErrors.phone}</label>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-phone"></i></div>
              <span className="inputBox">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number (Optional)"
                  onFocus={(event)=>this.resetErrors(event)}
                  onBlur={(event)=>this.handelErrors(event)}
                  onChange={event => this.handleInputChange(event)} />
              </span>
            </div>
          </div>
          <div className="fieldWrapper">
            <label >{this.state.formErrors.message}</label>
            <textarea
              className="message"
              rows="4" cols="50"
              name="message"
              placeholder="Message"
              form="usrform"
              onFocus={(event)=>this.resetErrors(event)}
              onBlur={(event)=>this.handelErrors(event)}
              onChange={event => this.handleInputChange(event)}>
            </textarea>
          </div>
          </form>
          <div className="buttonsWraper">
            {/* <button className="btnCancel" onClick={() => this.goTo('landing', 'exchange')}> Cancel</button> */}
            <button className="btnSubscribe" disabled={!this.state.canSubmit} onClick={() => this.send()}>Send</button>
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
