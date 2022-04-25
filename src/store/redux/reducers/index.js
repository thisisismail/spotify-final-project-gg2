import {combineReducers} from 'redux';
import tokenReducer from './storeTokenReducer.js';
import selectTrackReducer from './selectTrackReducer.js';
import selectTitleReducer from './selectTitleReducer.js';
import searchInputReducer from './searchInputReducer.js';
import searchResultReducer from './searchResultReducer.js';
import userIDReducer from './userIDReducer.js';

const allReducers = combineReducers({
  storeToken: tokenReducer,
  storeTracks: selectTrackReducer,
  storeTitles: selectTitleReducer,
  storeSearch: searchInputReducer,
  storeSearchResult: searchResultReducer,
  storeUserID: userIDReducer,
})

export default allReducers;