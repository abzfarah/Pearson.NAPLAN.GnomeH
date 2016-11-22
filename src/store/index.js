import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware';
import userManager from '../utils/userManager';
import reducers from '../reducers';

const oidcMiddleware = createOidcMiddleware(userManager, null, false, '/callback', null);

// ======================================================
// Store Enhancers
// ======================================================

const enhancers = []

if (__DEV__) {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

// ======================================================
// Middleware Configuration
// ======================================================

const middleware = [  oidcMiddleware, 
                      thunkMiddleware, 
                      logger(), 
                      promiseMiddleware(), 
                      routerMiddleware(browserHistory) ]

const store = compose( applyMiddleware(...middleware), ...enhancers )(createStore)(reducers)    
                                          

// ======================================================
// Store Instantiation and HMR Setup
// ======================================================

store.asyncReducers = {}

if (module.hot) {
    module.hot.accept('../reducers', () => {
    const reducers = require('../reducers').default;
    store.replaceReducer(reducers(store.asyncReducers));
  })
}

export default store;
