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
    email: { required:'An email is required' }
  
}

class SignUp extends Component {
  state = {
    name:'',
    phone:'',
    email:'',
    errors: {
      name:'',
      phone:'',
      email:''
    }
  }

  handleSubmitButton (){
    const {name, email, errors} = this.state;
    return name && email && !errors.name && !errors.email
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handelErrors(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let errors = this.state.errors
    if (!value) {
      errors[name]=errorMessages[name].required
    }

    this.setState(errors);
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
      name:this.state.name,
      email:this.state.email,
      phone: this.state.phone
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
