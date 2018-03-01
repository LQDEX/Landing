import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Modules
import Marquee from "react-smooth-marquee";

//Import Styles
import injectSheet from 'react-jss';
import { headerStatsStyle } from './styles';

class HeaderStats extends Component {
  state = {
    marketData: [
      {
        index: 'NIKKEI 225',
        value: '21720.25',
        balanceV: '255.27',
        balanceP: '1.19',
      },
      {
        index: 'OMXN40',
        value: '157.86',
        balanceV: '26.44',
        balanceP: '1.71',
      },
      {
        index: 'FTSE100',
        value: '6859.15',
        balanceV: '-34.77',
        balanceP: '-0.5',
      },
      {
        index: 'NIKKEI 225',
        value: '21720.25',
        balanceV: '255.27',
        balanceP: '1.19',
      }
    ]
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Marquee velocity={0.05}>
          <span>
            US Market Closed Feb 16,2018&nbsp;-&nbsp;
            {this.state.marketData.map(item => {
              return (
                <span>
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
  return {};
};

const dispatchToProps = dispatch => {
  return {
  };
};

export default connect(stateToProps, dispatchToProps)(injectSheet(headerStatsStyle)(HeaderStats));
