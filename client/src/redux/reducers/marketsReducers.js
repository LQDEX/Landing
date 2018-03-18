import constants from '../constants';

const initialState = { marketData: [] };

/* eslint-disable */
const market = (state = initialState, action) => {
  switch (action.type) {
    case constants.CRYP_STATS_MARKETS_GET:
      {
        const marketData = action.data;
        return { ...state,
          marketData
        }
      }
    default:
      return state;
  }
};

export default market;