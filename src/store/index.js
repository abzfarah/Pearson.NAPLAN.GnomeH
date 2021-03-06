import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import userManager from '../components/utils/oidc/userManager';

const oidcMiddleware = createOidcMiddleware(userManager, null, false, '/callback', null);
const enhancers = [];
const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), thunkMiddleware, logger())
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

if (__DEBUG__) {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const reducers = require('../reducers').default;
    store.replaceReducer(reducers(store.asyncReducers));
  })
}

export default store;
