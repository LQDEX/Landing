import constants from '../constants';

const initialState = {
  showPage: 'landing',
  showSidenav: false,
  platform: {}
};

/* eslint-disable */
const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.APP_SHOW_PAGE: {
      return {
        ...state,
        showPage: action.data
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
