import constants from '../constants';

const initialState = {
  activePage: {
    page: 'landing',
    params: ''
  },
  showSidenav: false,
  platform: {}
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
    default:
      return state;
  }
};

export default app;
