import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Modules
import Marquee from "react-smooth-marquee";

//Import Styles
import injectSheet from 'react-jss';
import { headerStatsStyle } from './styles';

class HeaderStats extends Component {

  render() {
    const { classes, marketData } = this.props;
    return (
      <div className={classes.root}>
        <Marquee velocity={0.05}>
          <span>
            US Market Closed Feb 16,2018&nbsp;-&nbsp;
            {marketData.map((item, i) => {
              return (
                <span key={`stats${i}`}>
                  {item.index} {item.value}&nbsp;
                  <span className={parseInt(item.balanceV, 10) > 0 ? 'up' : 'down'} >
                    {item.balanceV}
                    {parseInt(item.balanceV, 10) > 0 ? String.fromCharCode(9206) : String.fromCharCode(9207)}&nbsp;
                    {item.balanceP}%</span>&nbsp;&nbsp;
                </span>)
            })}
          </span>
        </Marquee>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    marketData: state.market.marketData,
  };
};

const dispatchToProps = dispatch => {
  return {
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(headerStatsStyle)(HeaderStats));
