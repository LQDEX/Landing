import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Modules
import Marquee from 'react-malarquee';

// Import Styles
import injectSheet from 'react-jss';
import { headerStatsStyle } from './styles';

class HeaderStats extends Component {

  render() {
    const { classes, marketData } = this.props;

    return (
      <div className={classes.root}>
        {marketData.length &&
          <Marquee className="MarqueeWrap" hoverToPause={false} fill={true} rate={50} >
            <div className="MarqueeContent">
              <span>
                {'Cryptocurrency Market - '}
                {marketData.map((item, i) =>
                  <span key={`stats${i}`}>
                    {item.name}&nbsp;({item.symbol}):&nbsp;
                    <span className="circulatingSupply">{(parseInt(item.available_supply, 10) / 1000000).toFixed(2)} million </span>&nbsp;
                    <span className={parseInt(item.percent_change_7d, 10) > 0 ? 'up' : 'down'} >
                      {item.percent_change_7d}%@7d
                      {parseInt(item.percent_change_7d, 10) > 0 ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}&nbsp;
                    </span>&nbsp;&nbsp;
                  </span>
                )}
              </span>
            </div>
          </Marquee>}
      </div>
    );
  }
}

const stateToProps = state => ({ marketData: state.market.marketData });

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(headerStatsStyle)(HeaderStats));
