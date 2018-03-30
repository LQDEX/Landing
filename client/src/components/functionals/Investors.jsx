import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { investorsStyle } from './styles';

class Investors extends Component {
  render() {
    const { classes, investors, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      tablet: classes.root,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style}>
        <div className="firstLine">Investors</div>
        <div className="logosRow">
          {investors.map((item, ii) =>
            <a className="frameLink" href={item.linkTo} target="_blank" key={`item${ii}`}>
              <img className="investorLogo"src={require(`../../assets/img/${item.logoFile}`)} alt={item.name} />
            </a>
          )}
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({
  investors: state.investors.members,
  deviceType: state.app.platform.deviceType
});

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(investorsStyle)(Investors));
