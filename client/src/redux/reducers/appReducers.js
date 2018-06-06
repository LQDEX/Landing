import constants from '../constants';

const initialState = {
  config: {
    backgroundVideo: false,
    backgroundVideoRes: 'HD', // HD, 2K, 4K
  },
  activePage: {
    page: 'landing',
    params: ''
  },
  showSidenav: false,
  platform: {},
  wDim: {},
  navBar: {
    active: 'exchange',
    options: [
      {
        name: 'aboutUs',
        caption: 'ABOUT US',
        pageTo: 'landing',
        pointTo: 'aboutUs'
      },
      {
        name: 'contact',
        caption: 'CONTACT',
        pageTo: 'contact',
        pointTo: 'contact'
      },
      {
        name: 'blog',
        caption: 'BLOG',
        pageTo: 'blog',
        pointTo: 'blog'
      },
      {
        name: 'exchange',
        caption: 'EXCHANGE',
        pageTo: 'landing',
        pointTo: 'exchange'
      },
    ]
  }
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
