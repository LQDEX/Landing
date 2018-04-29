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
    errors: {
      name:'',
      phone:'',
      email:''
    },
  }

  handleSubmitButton() {
    const {nameValue, emailValue, phoneValue, errors} = this.state;
    const hasError = !!errors.name || !!errors.phone || !!errors.email
    const hasRequired = !!nameValue && !!emailValue;
    const canSubmit = hasRequired && !hasError;
    console.log('ACZ ---> hasRequired', hasRequired);
    console.log('ACZ ---> hasError', hasError);
    console.log('ACZ ---> canSubmit', canSubmit);
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
    console.log('ACZ 2 ----->', errors);
    this.setState(errors, () => this.handleSubmitButton());
    
  }

  resetErrors(event) {
    const target = event.target;
    const name = target.name;
    let errors = this.state.errors;
    errors[name]='';

    this.setState(errors);
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
      name:this.state.nameValue,
      email:this.state.emailValue,
      phone: this.state.phoneValue
    })
    .then(res => {
      const response = res.data;
      console.log(response);
      if (response.error) {
        alert(`Error: ${response.error.errno} - ${response.error.sqlMessage}`);
      } else {
        alert(`Thank you. We will keep you updated.`);
      }
    })
    .catch(err => alert('ERROR: an error occured, try again in a while'));
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
