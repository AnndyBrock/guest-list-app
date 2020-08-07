import { combineReducers } from 'redux';

import guestsReducer  from './guests';

const rootReducer = combineReducers({
    guests:guestsReducer
});

export default rootReducer;