import { combineReducers } from 'redux';
import list from './crud/reducer';

const rootReducer = combineReducers({
  list,
});

export default rootReducer;
