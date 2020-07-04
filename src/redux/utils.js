import {compose} from 'redux';

export const composeEnhancers =
  (process.browser &&
    'production' !== process.env.NODE_ENV &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
