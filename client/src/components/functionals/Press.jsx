import React, { Component } from 'react';
import { connect } from 'react-redux';
import press from '../../constants/press'

// Redux actions
import actions from '../../redux/actions';

// Import Styles
import injectSheet from 'react-jss';
import { pressStyle } from './styles';
  
class Press extends Component {
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
      tablet: classes.mRoot,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style} >
        <div className="firstLine">Press</div>
        <div className="newsFeedCardWrapper">
          {press.map( feed => 
            <a className='newsFeedCard' href={feed.link} target="_blank">
              <img width='200' src={require(`../../assets/img/${feed.logo}`)} alt={feed.caption} />
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

export default connect(stateToProps, dispatchToProps)(injectSheet(pressStyle)(Press));
