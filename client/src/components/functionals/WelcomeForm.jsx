import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { welcomeFormStyle } from './styles';

/* const shapes = {
  desktop: [{ xP: 0.00, yP: 0.00 }, { xP: 0.67, yP: 0.14 }, { xP: 1.00, yP: 1.00 }],
  mobile:  [{ xP: 0.00, yP: 1.00 }, { xP: 0.77, yP: 0.94 }, { xP: 1.00, yP: 0.98 }, { xP: 1.00, yP: 1.00 }],
  tablet:  [{ xP: 0.00, yP: 1.00 }, { xP: 0.90, yP: 0.90 }, { xP: 1.00, yP: 0.94 }, { xP: 1.00, yP: 1.00 }]
}; */


const errorMessages = {
  email: { requiredOnSubscribe:'Required field.',
           wrongEmail: 'Email address in invalid format' }

}

class WelcomeForm extends Component {
  state = {
    wWidth: 500,
    wHeight: 80,
    emailValue:'',
    canSubmit: true,
    formFieldStatus: {
      email:{
        touched: false
      },
    },
    formSuccess: {
      email:''
    },
    formErrors: {
      email:''
    },
  }

  handleSubmitButton() {
    const hasError = !!this.state.formErrors.email
    const canSubmit = !hasError;
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
    let errors = this.state.formErrors;
    
    if (!value && fieldState.touched) {
      errors[name] = errorMessages[name].required
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
    let success = this.state.formSuccess;
    errors[name]='';
    success[name]='';

    this.setState(errors, () => this.handleSubmitButton());
  }

  updateWindowsDim() {
    return this.setState({
      wWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateWindowsDim());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowsDim.bind(this));
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
     
    let formSuccess = this.state.formSuccess;
    let formErrors = this.state.formErrors;
    if (this.state.emailValue){
      axios.post('/users/add', {
        name:'QuickSubcriber',
        email:this.state.emailValue,
        phone: ''
      })
      .then(res => {
        // console.log('Wellcome --> Respose: ',res);
        const response = res.data;
    if (response.error) {
      formSuccess.email = this.handleErrorMsg(response.error);
      this.setState(formSuccess);
    } else {
      formSuccess.email='THANK YOU!';
        this.setState(formSuccess);
    }    
      }) 
      .catch(err => {
        // console.log('Wellcome --> Error: ',err);
        
      });
    } else {
      formErrors.email = errorMessages.email.requiredOnSubscribe;
      this.setState(formErrors);
    }
  }

  render() {
    const
      { classes, deviceType } = this.props,
      style = {
        desktop: classes.root,
        tablet: classes.tRoot,
        mobile: classes.mRoot
      }[deviceType];
 
    return (
      <div className={style} >
        <div className="formWrap">
          <div className="inputWrapper">
            <form>
              <span className="inputBox">
                <input
                  name="email"
                  type="text"
                  placeholder="Email address"
                  onFocus={(event)=>this.resetErrors(event)}
                  onBlur={(event)=>this.handelErrors(event)}
                  onChange={(event)=>this.handleInputChange(event)} />
              </span>
            </form>
            <button className="btnSubscribe" disabled={!this.state.canSubmit} onClick={() => this.send()}>SUBSCRIBE</button>
          </div>
        </div>
        <div  className="errorLabel">
        <label >{this.state.formErrors.email}</label>
        <label className="successLabel" >{this.state.formSuccess.email}</label>
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(welcomeFormStyle)(WelcomeForm));
