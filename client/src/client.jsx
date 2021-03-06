/* eslint-disable */
import React from 'react';
import {
  render
} from 'react-dom';
import {
  createStore,
  compose
} from 'redux';

import {
  Provider
} from 'react-redux';

import App from './App';

import AppRoutes from './routes';

// Redux Imports
import reducers from './redux/reducers';
import middlewares from './redux/middleware';

//Redux Entry Point
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(middlewares));
//const store = createStore(reducers);


const app = (
  <Provider store={store} >
    <AppRoutes />
    {/*<App />*/}
  </Provider>
);

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(app, rootElement);
}