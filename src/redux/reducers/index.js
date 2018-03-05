/* eslint-disable */
import {
  combineReducers
} from 'redux';

//Reducer imports
import app from './appReducers';
import roadmap from './roadmapReducers';
import team from './teamReducer';
import advisors from './advisorsReducer';
import investors from './investorsReducer';

export default combineReducers({
  app,
  roadmap,
  team,
  advisors,
  investors,
});