/* eslint-disable */
import constants from '../constants';

export default {
  appShowPage: value => {
    return {
      type: constants.APP_SHOW_PAGE,
      data: value
    };
  },
  platformSet: value => {
    return {
      type: constants.APP_PLATFORM_SET,
      data: value
    };
  },
  sideNavToggle:()=>{
    return{
    type:constants.APP_SIDENAV_TOGGLE,
    data:null,
    };
  }

};