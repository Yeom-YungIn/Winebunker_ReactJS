import {combineReducers} from "redux";
import list from './list_reducer';

const rootReducer = combineReducers({
    list,
})

export default rootReducer;