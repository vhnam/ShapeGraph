import React from 'react';
import {Provider} from 'react-redux';

import store from './redux';

import Workplace from './scenes/Workplace';

const App = () => (
  <Provider store={store}>
    <Workplace />
  </Provider>
);

export default App;
