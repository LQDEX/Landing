import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { investorsStyle } from './styles';

const investors = [
  {
    name: 'spacex',
    logoFile: 'logoSpacex.png'
  }, {
    name: 'tesla',
    logoFile: 'logoTesla.png'
  }, {
    name: 'theBoringCompany',
    logoFile: 'logoBoring.png'
  }, {
    name: 'solarCity',
    logoFile: 'logoSolarcity.png'
  }, {
    name: 'openai',
    logoFile: 'logoOpenai.png'
  },
];

class Investors extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="firstLine">Investors</div>
        <div className="logosRow">
          {investors.map((item) =>
            (<img src={require(`../../assets/img/${item.logoFile}`)} alt={item.name} />)
          )}
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(investorsStyle)(Investors));