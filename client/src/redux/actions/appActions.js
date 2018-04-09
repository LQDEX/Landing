/* eslint-disable */
import constants from '../constants';

export default {
  
  goToPage: (page,params) => {
    return {
      type: constants.APP_SHOW_PAGE,
      data:  {page, params }
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
  },

  navBarActive: (activeOption) => {
    return {
      type: constants.APP_NAVBAR_ACTIVE,
      data: activeOption,
    }
  },

//  onWindowResize: (wDim) => {
//    return {
//      type: constants.APP_WINDOW_RESIZE,
//      data: wDim,
//    }
//  }

};