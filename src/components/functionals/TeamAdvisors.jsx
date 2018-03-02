import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import injectSheet from 'react-jss';
import { teamAdvisorsStyle } from './styles';

const team = [
  {
    avatar: 'avatar1.png',
    name: 'Nathan Chen',
    title: 'Project Lead (Co-founder)'
  }, {
    avatar: 'avatar2.png',
    name: 'Brandon Long',
    title: 'Technical Lead (Co-founder)'
  }, {
    avatar: 'avatar3.png',
    name: 'Joshua Jensen',
    title: 'BizDev Lead (Co-founder)'
  }, {
    avatar: 'avatar4.png',
    name: 'Marie Williams',
    title: 'Developer (Back-end)'
  },
]

const advisors = [
  {
    avatar: 'avatar5.png',
    name: 'Bruce Carter',
    advisor: 'Strategy Advisor',
    title: 'CEO of Tapscott Group',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }, {
    avatar: 'avatar6.png',
    name: 'Steven Barnett',
    advisor: 'Capital Markets Advisor',
    title: ' Former COO Soros Fund',
    brief: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur minima veniam, quis nostrum exercitationem. '
  }, {
    avatar: 'avatar7.png',
    name: 'Cheryl Ellis',
    advisor: 'Capital Markets Advisor',
    title: ' Former COO Soros Fund',
    brief: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
  }, {
    avatar: 'avatar1.png',
    name: 'Gerald Curtis',
    advisor: 'Public Sector Advisor',
    title: 'CEO of Keynote',
    brief: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui qui eiusmod tempor incididunt.'
  },
]

const TeamCard = (props) => (
  <div className="teamCard">
    <div>
      <img height={300} src={require('../../assets/img/' + props.mate.avatar)} alt="avatar" />
    </div>
    <div className="mateName">{props.mate.name}</div>
    <div className="mateTitle">{props.mate.title}</div>
  </div>
)

const AdvisorCard = (props) => (
  <div className="advisorCard">
    <div>
      <img height={300} src={require('../../assets/img/' + props.advisor.avatar)} alt="avatar" />
    </div>
    <div className="mateName">{props.advisor.name}</div>
    <div className="mateTitle">{props.advisor.advisor}</div>
    <div className="mateTitle">{props.advisor.title}</div>
    <div className="mateBrief">{props.advisor.brief}</div>
  </div>
)

class TeamAdvisors extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="firstLine">Team</div>
        <div className="teamRow"     >
          {team.map((mate) =>
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
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(injectSheet(teamAdvisorsStyle)(TeamAdvisors));