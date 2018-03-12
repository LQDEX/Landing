import constants from '../constants';

const initialState = {
  platform: {},
  showSidenav: false
};

/* eslint-disable */
const app = (state = initialState, action) => {
  switch (action.type) {

    case constants.APP_PLATFORM_GET: {
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
