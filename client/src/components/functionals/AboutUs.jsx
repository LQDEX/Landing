import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import injectSheet from 'react-jss';
import { aboutUsStyle } from './styles';

const aboutTxt = 'LQDEX (pronounced "liquid-ex") is a decentralized trustless cross-chain digital asset exchange. It allows trading of digital tokens across multiple blockchains without counterparty risk. The system does not use atomic swaps and does not require modifications to the existing blockchains. It runs on its own high-speed POS blockchain without miner fees.'

const sections = [
  {
    name: 'Decentralized',
    desc: 'LQDEX runs as a dapp on a purpose-built POS blockchain. It is immutable, transparent, and publicly auditable.',
  },
  {
    name: 'Trustless',
    desc: 'The system does not rely on "trusted" third parties. There is no counterparty risk when using the exchange.',
  },
  {
    name: 'Cross-Chain',
    desc: 'The exchange supports trading of digital assets across multiple blockchains. Virtually any pair can be traded, such as Bitcoin and Ether.',
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
      tablet: classes.mRoot,
      mobile: classes.mRoot
    }[deviceType];

    return (
      <div className={style}>
        <div className="firstLine">About Us</div>
        <div className="txtBody">
          {aboutTxt}
        </div>
        <div className="teamRow" >
          {sections.map((section, i) =>
            <AboutCard key={`item${i}`} section={section} item={`i${i}`} width="190" height="190"/>
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
