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

const errorMessages = {
  name: { required:'A name is required' },
  phone: { required:'' },
  email: { required:'An email is required' },
  message: {required:'A message is required' },

}

class Contact extends Component {
  state = {
    name:'',
    phone:'',
    email:'',
    message:'',
    canSubmit: true,
    errors: {
      name:'',
      phone:'',
      email:'',
      message:''
    }
  }


  handleSubmitButton (){
    const {name, email, errors, message} = this.state;
    console.log('canSubmit:', name && email && message && !errors.name && !errors.email && !errors.message);
    
    return this.setState({ canSubmit:true})
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.handleSubmitButton();
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
    this.handleSubmitButton();
  }

  resetErrors(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let errors = this.state.errors
    errors[name]='',

    this.setState(errors);
    this.handleSubmitButton();
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
    .then(res => {
      const response = res.data;
      console.log(response);
      if (response.error) {
        alert(`Error: ${response.error.errno} - ${response.error.sqlMessage}`);
      } else {
        alert(`We recieved your message`);
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
            <span className="firstLine">Get in Touch</span>
            <button className="btnClose" onClick={() => this.goTo('exchange', 'landing')}><i className="fas fa-times fa-2x"></i></button>
          </div>
          <form>
          <div className="fieldWrapper">
            <label >{this.state.errors.name}</label>
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
            <label >{this.state.errors.email}</label>
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
            <label >{this.state.errors.phone}</label>
            <div className="inputWraper">
              <div className="inputIcon"><i className="fas fa-phone"></i></div>
              <span className="inputBox">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  onFocus={(event)=>this.resetErrors(event)}
                  onBlur={(event)=>this.handelErrors(event)}
                  onChange={event => this.handleInputChange(event)} />
              </span>
            </div>
          </div>
          <div className="fieldWrapper">
            <label >{this.state.errors.message}</label>
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
            <button className="btnCancel" onClick={() => this.goTo('exchange', 'landing')}> Cancel</button>
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
