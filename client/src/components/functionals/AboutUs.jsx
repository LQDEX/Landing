import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { aboutUsStyle, palette } from './styles';

const sections = [
  {
    name: 'Decentralized',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus imperdiet mattis. Aliquam purus lacus, semper quis convallis et, congue eu velit.',
  },
  {
    name: 'Trustless',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus imperdiet mattis. Aliquam purus lacus, semper quis convallis et, congue eu velit.',
  },
  {
    name: 'Crossblockchain',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus imperdiet mattis. Aliquam purus lacus, semper quis convallis et, congue eu velit.',
  },
];

const AboutCard = props =>
  <div className="card">
    {props.item === 'i0' && <img alt={props.item} src={require('../../assets/img/Decentralized.svg')} width={props.width} height={props.height}/>}
    {props.item === 'i1' && <img alt={props.item} src={require('../../assets/img/Trustless.svg')} width={props.width} height={props.height}/>}
    {props.item === 'i2' && <img alt={props.item} src={require('../../assets/img/Crossblockchain.svg')} width={props.width} height={props.height}/>}
    <div className="mateName">{props.section.name}</div>
    <div className="mateBrief">{props.section.desc}</div>
  </div>;

class AboutUs extends Component {
  render() {
    const { classes, deviceType } = this.props;

    const style = {
      desktop: classes.root,
      tablet: classes.root,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style}>
        <div className="firstLine">About Us</div>
        <div className="teamRow" >
          {sections.map((section, i) =>
            <AboutCard key={`item${i}`} section={section} item={`i${i}`} width="250" height="250"/>
          )}
        </div >
      </div>
    );
  }
}

const stateToProps = state => ({
  deviceType: state.app.platform.deviceType
});

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(injectSheet(aboutUsStyle)(AboutUs));
