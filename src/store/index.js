import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger";
import userManager from '../utils/userManager';
import reducer from '../reducers';







const oidcMiddleware = createOidcMiddleware(userManager, null, false, '/callback', null);
const enhancers = [];
const initialState = {};

const enhancer = []


  const store = compose(
	  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), thunkMiddleware, logger())
	)(createStore)(reducer)



if (__DEV__) {
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
