import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Modules
import Marquee from "react-malarquee";

//Import Styles
import injectSheet from 'react-jss';
import { headerStatsStyle } from './styles';

class HeaderStats extends Component {

  render() {
    const { classes, marketData } = this.props;
    console.log(marketData.length);

    return (
      <div className={classes.root}>
        {marketData.length &&
          <Marquee hoverToPause={true} fill={true} rate={100}        >
            <div className="MarqueeContent">
              <span>
                {'Cryptocurrency Market - '}
                {marketData.map((item, i) =>
                  (<span key={`stats${i}`}>
                    {item.name}({item.symbol}):
                    <span className="circulatingSupply">{(parseInt(item.available_supply, 10) / 1000000).toFixed(2)} millions </span>&nbsp;
                    <span className={parseInt(item.percent_change_7d, 10) > 0 ? 'up' : 'down'} >
                      {item.percent_change_7d}%@7d
                      {parseInt(item.percent_change_7d, 10) > 0 ? String.fromCharCode(9206) : String.fromCharCode(9207)}&nbsp;
                    </span>&nbsp;&nbsp;
                </span>
                  ))}
              </span>
            </div>
          </Marquee>}
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
