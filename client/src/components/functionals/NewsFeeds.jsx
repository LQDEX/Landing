import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { newsFeedsStyle } from './styles';

const newsFeeds = [
    {
      name: 'CryptoDaily',
      caption: 'CryptoDaily',
      logo: 'newFeed_cryptoDaily.png',
      link: 'https://cryptodaily.co.uk/2018/06/5-decentralized-exchanges-to-watch-in-2018/',
    },
    {
      name: 'Buzzfeed',
      caption: 'Buzzfeed',
      logo: 'newFeed_buzzFeed.png',
      link: 'https://www.buzzfeed.com/ethrey/5-things-crypto-newbies-should-know-3fo6s?utm_term=.nkwdylEaWR#.gv4eKP0E6V',
    },
    {
      name: 'CryptoDisrupt',
      caption: 'CryptoDisrupt',
      logo: 'newFeed_cryptoDisrupt.png',
      link: 'https://cryptodisrupt.com/lqdex-releases-details-about-their-decentralised-cross-chain-exchange/',
    },
    {
      name: 'BTCExchangeGuide',
      caption: 'BTCExchangeGuide',
      logo: 'newFeed_BEG.png',
      link: 'https://bitcoinexchangeguide.com/lqdex-ico-lqd-token/',
    },
    {
      name: 'TOSHITIMES',
      caption: 'TOSHI TIMES',
      logo: 'newFeed_toshiTimes.png',
      link: 'https://toshitimes.com/decentralised-or-centralised-exchanges-which-should-you-be-using/',
    },
    {
      name: 'COINRIVET',
      caption: 'COINRIVET',
      logo: 'newFeed_coinRivet.png',
      link: 'https://www.coinrivet.com/stories/21/6/2018/what-are-decentralised-exchanges-and-why-are-they-important',
    }
  ]
  
/*   return (
    <div >
      <a className='icon' href={socialLinks.Twitter} target="_blank"><i className="fab fa-twitter fa-2x" ></i></a>
      <a className='icon' href={socialLinks.Facebook} target="_blank"><i className="fab fa-facebook-f fa-2x" ></i></a>
      <a className='icon' href={socialLinks.LinkedIn} target="_blank"><i className="fab fa-linkedin-in fa-2x" ></i></a>
      <a className='icon' href={socialLinks.Telegram} target="_blank"><i className="fab fa-telegram-plane fa-2x" ></i></a>
      <a className='icon' href={socialLinks.Instagram} target="_blank"><i className="fab fa-instagram fa-2x" ></i></a>
      <a className='icon' href={socialLinks.Medium} target="_blank"><i className="fab fa-medium-m fa-2x" ></i></a>
      <a className='icon' href={socialLinks.Reddit} target="_blank"><i className="fab fa-reddit-alien fa-2x" ></i></a>
    </div>
  );}
 */
  
class Footer extends Component {
  state = {
    e2Dir: {
      d0: 'For media inquiries please email ',
      d1:'mailto:et',
      d2:'han@LQD',
      d3:'EX.com'
    }
  }

 e2Dir (props) {
    return(
      <span className="copyRights">
        {props.d0}
        <a className="mediaLink" href={`${props.d1}${props.d2}${props.d3}`}>{`Et${props.d2}${props.d3}`}</a>
      </span>
    )
  }
  

  goTo(page, section) {
    if (page) {
      this.props.goToPage(page, null);
    }
    if (section) {
      this.props.navBarActive(section);
      window.location.href = `#${section}`;
    }
  }

  render() {
    const { classes, deviceType } = this.props;
    const style = {
      desktop: classes.root,
      tablet: classes.root,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style} >
        <div className="firstLine">Press</div>
        <div className="newsFeedCardWrapper">
          {newsFeeds.map( feed => 
            <a className='newsFeedCard' href={feed.link} target="_blank">
              <img width='200' src={require(`../../assets/img/${feed.logo}`)} />
              {/* <p className='feedName' > {feed.caption} </p> */}
            </a>
          )}
        </div>
       
        <div className="feedPosition">
          {this.e2Dir(this.state.e2Dir)}
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

export default connect(stateToProps, dispatchToProps)(injectSheet(newsFeedsStyle)(Footer));
