import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { teamAdvisorsStyle, palette } from './styles';

const AvatarFrame = props => {
  const { shadowSoft, primary } = palette;
  const margin = { xm: 25, ym: 25 };
  const imgWidth = props.width;
  const imgHeight = props.height;
  const frameShape = [
    [{ xP: 0.20, yP: 0.00 }, { xP: 0.85, yP: 0.09 }, { xP: 1.00, yP: 0.54 }, { xP: 0.66, yP: 1.00 }, { xP: 0.00, yP: 0.61 }],
    [{ xP: 0.79, yP: 0.00 }, { xP: 1.00, yP: 0.50 }, { xP: 0.60, yP: 1.00 }, { xP: 0.07, yP: 0.90 }, { xP: 0.00, yP: 0.19 }],
    [{ xP: 0.60, yP: 0.00 }, { xP: 1.00, yP: 0.30 }, { xP: 0.81, yP: 0.93 }, { xP: 0.25, yP: 1.00 }, { xP: 0.00, yP: 0.47 }],
    [{ xP: 0.69, yP: 0.00 }, { xP: 1.00, yP: 0.35 }, { xP: 0.90, yP: 1.00 }, { xP: 0.25, yP: 0.94 }, { xP: 0.00, yP: 0.27 }],
    [{ xP: 0.54, yP: 0.00 }, { xP: 1.00, yP: 0.41 }, { xP: 0.71, yP: 0.91 }, { xP: 0.31, yP: 1.00 }, { xP: 0.00, yP: 0.40 }, { xP: 0.13, yP: 0.10 }]
  ];
  const frameIndex = Math.floor(Math.random() * (frameShape.length - 1));
  const pointsCalc = index => {
    let points = '';
    points += frameShape[index].map(pPoint => `${(imgWidth - margin.xm) * pPoint.xP + margin.xm / 2} ${(imgHeight - margin.ym) * pPoint.yP + margin.ym / 2}`);

    return points;
  };

  // '125 10, 30 290, 10 125';

  return (
    <div style={{
      width: props.width,
      height: props.height
    }}>
      <a id="frameLink" style = { { outline: 'none' } } href={props.linkTo} target="_blank">
        <div id="frameContainer" style = { { transform: 'scale(0.90)' } }>
          <svg id="svgContainer" style={{ filter: `drop-shadow(0px 0px 5px ${shadowSoft})` }} width={imgWidth} height={imgHeight}>
            <polygon id="svgBackgound" style={ { fill: primary } } points={pointsCalc(frameIndex)} />
            <image id="svgImage" filter="url(#grayscale)" style={ { clipPath: `url(#shape${frameIndex})`} } width={imgWidth} height={imgHeight} xlinkHref={require(`../../assets/img/${props.imgName}`) } />
            <polygon id="svgFrame" points={pointsCalc(frameIndex)}
              style={ {
                fill: 'none',
                stroke: 'white',
                strokeWidth: 10,
                filter: 'drop-shadow( 6px 0 2px hsla(0, 0%, 0%, 0.2))'
              } }
            />
            <filter id="grayscale">
              <feColorMatrix type="saturate" values="0"/>
            </filter>
            <image id="svgLogo" x={imgWidth / 2} y={imgHeight / 2} width={32} height={32} xlinkHref={require(`../../assets/img/logoLinkedin.png`) } />
            <defs>
              {frameShape.map((pPoint, index) =>
                <clipPath key={`a${index}`} id={`shape${index}`}><polygon points={pointsCalc(index)}/></clipPath>
              )}
            </defs>
          </svg>
        </div>
      </a>
    </div>
  );
};

const MemberCard = props =>
  <div className="card">
    <AvatarFrame imgName={props.member.avatar} linkTo={props.member.myLink} width={300} height={300}/>
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
