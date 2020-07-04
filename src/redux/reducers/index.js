import {combineReducers} from 'redux';

import shapesReducer from './shape';

const rootReducer = combineReducers({
  shapes: shapesReducer,
});

export default rootReducer;
