import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { teamAdvisorsStyle } from './styles';

const AvatarFrame = props => {
  const frameIndex = Math.floor(Math.random() * 5);

  return (
    <div style={{
      width: '300px',
      height: '300px'
    }}>
      <a className="frameLink" href={props.linkTo} target="_blank">
        <div className="frameContainer">
          <div className={`frameOutside${frameIndex}`}>
            <div className={`frameInside${frameIndex}`}>
              <img className="avatar" width={300} height={300} src={require(`../../assets/img/${props.imgName}`)} alt="avatar" />
              <img className="in" src={require('../../assets/img/logoLinkedin.png')} alt="in" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const MemberCard = props =>
  <div className="card">
    <AvatarFrame imgName={props.member.avatar} linkTo={props.member.myLink} i={props.i} />
    <div className="mateName"><a className="nameLink" href={props.member.myLink} target="_blank">{props.member.name}</a></div>
    <div className="matePosition">{props.member.advisor}</div>
    <div className="matePosition">{props.member.title}</div>
    <div className="mateBrief">{props.member.brief}</div>
  </div>;
class TeamAdvisors extends Component {
  render() {
    const { classes, team, advisors, deviceType } = this.props;

    const style = {
      desktop: classes.root,
      tablet: classes.root,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style}>
        <div className="firstLine">Team</div>
        <div className="teamRow" >
          {team.map((member, i) =>
            <MemberCard member={member} key={`item${i}`} />
          )}
        </div >
        <div className="firstLine">Advisors</div>
        <div className="teamRow" >
          {advisors.map((member, i) =>
            <MemberCard member={member} key={`item${i}`} />
          )}
        </div >
      </div>
    );
  }
}

const stateToProps = state => ({
  team: state.team.members,
  advisors: state.advisors.members,
  deviceType: state.app.platform.deviceType
});

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(teamAdvisorsStyle)(TeamAdvisors));
