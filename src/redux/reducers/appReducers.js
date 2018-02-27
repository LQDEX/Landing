import constants from '../constants';

const initialState = { platform: {} };
/* eslint-disable */
const app = (state = initialState, action) => {
  switch (action.type) {


    case constants.APP_PLATFORM_GET: {
      return {
        ...state,
        platform: action.data
      };
    }
    default:
      return state;
  }
};

export default app;
