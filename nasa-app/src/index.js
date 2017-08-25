import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';

export const store = configureStore();

export const Main = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  Main,
  document.getElementById('app')
);
