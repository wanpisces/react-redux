import { combineReducers } from 'redux';

import load from './loadReducer';
import content from './contentReducer';
import allprize from './allprizeReducer';
export default combineReducers({
  load,
  content,
  allprize,
})
