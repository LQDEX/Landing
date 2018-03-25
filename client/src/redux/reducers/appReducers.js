import constants from '../constants';

const initialState = {
  activePage: {
    page: 'landing',
    params: ''
  },
  showSidenav: false,
  platform: {},
  navBar: {
    active: 'exchange',
    options: [
      {
        name: 'exchange',
        caption: 'EXCHANGE',
        pageTo: 'landing',
        pointTo: 'exchange'
      },
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
      }
    ]
  }
};

/* eslint-disable */
const app = (state = initialState, action) => {
  switch (action.type) {
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
  }
};

export default app;
