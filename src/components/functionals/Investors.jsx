import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { investorsStyle } from './styles';

class Investors extends Component {
  render() {
    const { classes, investors } = this.props;
    return (
      <div className={classes.root}>
        <div className="firstLine">Investors</div>
        <div className="logosRow">
          {investors.map((item) =>
            (<img className="investorLogo" src={require(`../../assets/img/${item.logoFile}`)} alt={item.name} />)
          )}
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    investors: state.investors.members,
  };
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(investorsStyle)(Investors));