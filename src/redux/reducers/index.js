/* eslint-disable */
import {
  combineReducers
} from 'redux';

//Reducer imports
import app from './appReducers';
import market from './marketsReducers';
import roadmap from './roadmapReducers';
import team from './teamReducer';
import advisors from './advisorsReducer';
import investors from './investorsReducer';

export default combineReducers({
  app,
  market,
  roadmap,
  team,
  advisors,
  investors,
});