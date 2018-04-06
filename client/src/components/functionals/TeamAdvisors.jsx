import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { teamAdvisorsStyle } from './styles';

const AvatarFrame = props => {
  const frameIndex = Math.floor(Math.random() * 5);
  const imgWidth = props.width;
  const imgHeight = props.height;
  const frameShape = [
    { xP: 0.1, yP: 0.95 },
    { xP: 0.2, yP: 0.05 },
    { xP: 0.8, yP: 0.1 },
    { xP: 0.9, yP: 0.85 }
  ];
  const pointsCalc = () => {
    let points = '';
    points += frameShape.map(pPoint => `${imgWidth * pPoint.xP} ${imgWidth * pPoint.yP}`);
    console.log(points);

    return points;
  };

  // '125 10, 30 290, 10 125';

  return (
    <div style={{
      width: props.width,
      height: props.height,
      border: '1px solid red'
    }}>
      {/* <a className="frameLink" href={props.linkTo} target="_blank">*/}
      <div className="frameContainer">
        <div className={`frameOutside${frameIndex}`}>
          <div className={`frameInside${frameIndex}`}>
            <svg id="image-svg" width={imgWidth} height={imgHeight}>
              <image id="img-1" className="svg-image" width={imgWidth} height={imgHeight} xlinkHref={require(`../../assets/img/${props.imgName}`) } />
              <polygon
                points={pointsCalc()}
                style={ {
                  fill: 'none',
                  stroke: 'purple',
                  strokeWidth: 10
                } }
              />
            </svg>
          </div>
        </div>
      </div>
      <svg id="svg-defs">
        <defs>
          <clipPath id="clip-triangle">
            <polygon points={pointsCalc()} style={{
              fill: 'lime',
              stroke: 'purple',
              strokeWidth: 5,
              fillRule: 'evenodd'
            }} />
          </clipPath>
        </defs>
      </svg>
      {/* <img className="avatar" width={imgWidth} height={imgHeight} src={require(`../../assets/img/${props.imgName}`) } alt="avatar" />
              <img className="in" src={require('../../assets/img/logoLinkedin.png')} alt="in" />
            </div>
          </div>

      </a>*/}
    </div>
  );
};

const MemberCard = props =>
  <div className="card">
    <AvatarFrame imgName={props.member.avatar} linkTo={props.member.myLink} i={props.i} width={300} height={300}/>
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
            <MemberCard member={member} key={`item${i}`}/>
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
