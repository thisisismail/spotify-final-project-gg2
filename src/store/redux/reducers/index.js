import {combineReducers} from 'redux';
import tokenReducer from './storeTokenReducer.js';
import selectTrackReducer from './selectTrackReducer.js';

const allReducers = combineReducers({
  storeToken: tokenReducer,
  storeTracks: selectTrackReducer,
})

export default allReducers;