import constants from '../../constants';
import navBar from '../../constants/navBar'

const initialState = {
  config: {
    backgroundVideo: true,
    backgroundVideoRes: 'SD', // SD, HD, 2K, 4K
  },
  activePage: {
    page: 'landing',
    params: ''
  },
  showSidenav: false,
  platform: {},
  wDim: {},
  navBar
};

/* eslint-disable */
const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.APP_CONFIG_SET: {
      const config = state.config;
      config[action.data.prop] = action.data.value;
      return {
        ...state,
        config
      };
    }
    case constants.APP_SHOW_PAGE: {
      return {
        ...state,
        activePage: {
          page:action.data.page,
          params:action.data.params || ""
        },
        showSidenav: false
      };
    }
    case constants.APP_PLATFORM_SET: {
      return {
        ...state,
        platform: action.data
      };
    }
    case constants.APP_SIDENAV_TOGGLE: {
      return {
        ...state,
        showSidenav: !state.showSidenav
      };
    }
    case constants.APP_NAVBAR_ACTIVE: {
      const navBar = {
        ...state.navBar,
        active: action.data,
      }
      return {
        ...state,
        navBar
      }
    }
    default:
      return state;
    
  //  case constants.APP_WINDOW_RESIZE: {
  //    return {
  //      ...state,
  //      wDim: action.data,
  //    }
  //  }
  }
};

export default app;
