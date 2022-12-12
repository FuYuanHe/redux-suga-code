import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store'
import Counter from './pages/Counter';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <Counter />
  </Provider>
);