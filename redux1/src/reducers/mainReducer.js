import {combineReducers} from 'redux';
import films from './filmReducer';

// declare all reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;