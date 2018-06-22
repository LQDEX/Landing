import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { newsFeedsStyle } from './styles';

const Social = () => {
  const newsFeeds = [
    {
      name: 'CryptoDaily',
      caption: 'CryptoDaily',
      logo: 'https://cryptodaily.co.uk/wp-content/uploads/2018/04/crypto-daily-big-with-R.png',
      link: '',
    },
    {
      name: 'Buzzfeed',
      caption: 'Buzzfeed',
      logo: 'https://cdn.worldvectorlogo.com/logos/buzzfeed.svg',
      link: 'https://cryptodaily.co.uk/2018/06/5-decentralized-exchanges-to-watch-in-2018/',
    },
    {
      name: 'CryptoDisrupt',
      caption: 'CryptoDisrupt',
      logo: 'https://cryptodisrupt.com/wp-content/uploads/2018/05/5adecd12050ac3fb2639a31a_Asset-2-2.png',
      link: 'https://www.buzzfeed.com/ethrey/5-things-crypto-newbies-should-know-3fo6s?utm_term=.nkwdylEaWR#.gv4eKP0E6V',
    },
    {
      name: 'BTCExchangeGuide',
      caption: 'BTCExchangeGuide',
      logo: 'https://3mgj4y44nc15fnv8d303d8zb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/LogoBEG-white.png',
      link: 'https://www.buzzfeed.com/ethrey/5-things-crypto-newbies-should-know-3fo6s?utm_term=.nkwdylEaWR#.gv4eKP0E6V',
    },
    {
      name: 'TOSHITIMES',
      caption: 'TOSHI TIMES',
      logo: 'https://toshitimes.com/wp-content/uploads/2018/03/nonRetina.png',
      link: 'https://toshitimes.com/decentralised-or-centralised-exchanges-which-should-you-be-using/',
    },
    {
      name: 'COINRIVET',
      caption: 'COINRIVET',
      logo: 'https://static1.squarespace.com/static/5ad7a50d7e3c3a2a26fd9e46/t/5afdf59970a6ad7131cfaff6/1529593737449/?format=1500w',
      link: 'https://www.coinrivet.com/stories/21/6/2018/what-are-decentralised-exchanges-and-why-are-they-important',
    }
  ]
  
  return (
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

  
class Footer extends Component {
  state = {
    eDir: {
      d1:'mailto:in',
      d2:'fo@lqd',
      d3:'ex.com'
    }
  }

  eDir (props) {
    return(
      <a className="copyRights em" href={`${props.d1}${props.d2}${props.d3}`}>{`in${props.d2}${props.d3}`}</a>
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
        <div className='socialIcons'>
          <div>
            <a className='icon' onClick={() => this.goTo('signUp', 'signUp')}><i className="far fa-envelope fa-2x" ></i></a>
          </div>
          <Social />
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
