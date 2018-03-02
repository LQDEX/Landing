import React, { Component } from 'react';

// Import Functionals
import { DetailedInfo } from '../functionals';


// Import Styles
import injectSheet from 'react-jss';
import { detailedInfoContainerStyle } from './styles';


class DetailedInfoContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div clasName={classes.root}>
        <DetailedInfo />
      </div>
    );
  }
}

export default injectSheet(detailedInfoContainerStyle)(DetailedInfoContainer);
