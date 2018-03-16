import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';


// Import containers
import {
} from '../containers/';

// Import Styles
import injectSheet from 'react-jss';
import { aboutStyle } from './styles';

class About extends Component {

  goToPage(page, param) {
    this.props.goToPage(page, param);
  }

  render() {
    const
      { classes } = this.props,
      style = classes.root;

    return (
      <div className={style} >
        <h1 style={{ fontSize: '4em' }}>ABOUT PAGE</h1>
        <button className="btnSubscribe" onClick={() => this.goToPage('landing')}>{`<<  Landing`}</button>
      </div>
    );
  }
}

const stateToProps = state => ({ });

const dispatchToProps = dispatch => ({ goToPage: (page, params) => dispatch(actions.goToPage(page, params)) });

export default connect(stateToProps, dispatchToProps)(injectSheet(aboutStyle)(About));
