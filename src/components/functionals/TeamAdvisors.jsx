import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { teamAdvisorsStyle } from './styles';

const AvatarFrame = (props) => {
  const frameIndex = Math.floor(Math.random() * 5)
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <a className="frameLink" href={props.linkTo}>
        <div className="frameContainer">
          <div className={`frameOutside${frameIndex}`}>
            <div className={`frameInside${frameIndex}`}>
              <img className="in" src={require('../../assets/img/logoLinkedin.png')} alt="in" />
              <img width={300} height={300} src={require('../../assets/img/' + props.imgName)} alt="avatar" />
            </div>
          </div>
        </div>
      </a>
    </div>
  )
};


const TeamCard = (props) => (
  <div className="card">
    <AvatarFrame imgName={props.mate.avatar} linkTo={props.mate.myLink} i={props.i} />
    <div className="mateName">{props.mate.name}</div>
    <div className="mateTitle">{props.mate.title}</div>
  </div>
);

const AdvisorCard = (props) => (
  <div className="card">
    <AvatarFrame imgName={props.advisor.avatar} linkTo={props.advisor.myLink} i={props.i} />
    <div className="mateName">{props.advisor.name}</div>
    <div className="mateTitle">{props.advisor.advisor}</div>
    <div className="mateTitle">{props.advisor.title}</div>
    <div className="mateBrief">{props.advisor.brief}</div>
  </div>
)

class TeamAdvisors extends Component {
  render() {
    const { classes, team, advisors } = this.props;
    return (
      <div className={classes.root}>
        <div className="firstLine">Team</div>
        <div className="teamRow"     >
          {team.map((mate, i) =>
            <TeamCard mate={mate} />
          )}
        </div >
        <div className="firstLine">Advisors</div>
        <div className="teamRow"     >
          {advisors.map((advisor) =>
            <AdvisorCard advisor={advisor} />
          )}
        </div >
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    team: state.team.members,
    advisors: state.advisors.members,
  };
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(teamAdvisorsStyle)(TeamAdvisors));