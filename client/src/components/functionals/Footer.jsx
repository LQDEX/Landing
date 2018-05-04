import React, { Component } from 'react';
import { connect } from 'react-redux';

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { footerStyle } from './styles';

const Social = () => {
  const socialLinks = {
    Twitter: 'https://twitter.com/LQDEX_',
    LinkedIn: 'https://www.linkedin.com/company/lqdex/',
    Facebook: 'https://www.facebook.com/LQDEX/'
  }
  return (
    <div className='socialIcons'>
      <a className='icon' href={socialLinks.Twitter} target="_blank"><i className="fab fa-twitter fa-2x" ></i></a>
      <a className='icon' href={socialLinks.Facebook} target="_blank"><i className="fab fa-facebook-f fa-2x" ></i></a>
      <a className='icon' href={socialLinks.LinkedIn} target="_blank"><i className="fab fa-linkedin-in fa-2x" ></i></a>
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

  goTo(section, page) {
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
        <div className="firstLine">Sign up for Updates</div>
        <div className="contactWrapper">
          <button className="btnSubscribe" onClick={() => this.goTo('signUp', 'signUp')}>Sign up</button>
        </div>
        <div className="copyRights">© 2018 LQDEX. All Rights Reserved.</div>
        <br/>
        <div className="copyRights">1541 Ocean Ave., Suite 200</div>
        <div className="copyRights">Santa Monica, CA 90401</div>
        <div className="copyRights">{this.eDir(this.state.eDir)}</div>
        <Social />
      </div>
    );
  }
}

const stateToProps = state => ({ deviceType: state.app.platform.deviceType });

const dispatchToProps = dispatch => ({
  goToPage: (page, params) => dispatch(actions.goToPage(page, params)),
  navBarActive: option => dispatch(actions.navBarActive(option))
});

export default connect(stateToProps, dispatchToProps)(injectSheet(footerStyle)(Footer));
