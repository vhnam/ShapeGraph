import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {composeEnhancers} from './utils';

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);
