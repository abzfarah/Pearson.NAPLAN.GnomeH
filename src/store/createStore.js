import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import createSagaMiddleware from 'redux-saga';
import { loadSubstricptionsSaga } from '../sagas/saga';
import userManager from '../utils/userManager';

export default (initialState = {}, history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================

  const oidcMiddleware = createOidcMiddleware(userManager, null, false);

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
                        thunk
                      , routerMiddleware(history)
                      , oidcMiddleware
                      , sagaMiddleware
                    ];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    })
  }

  // sagas
  sagaMiddleware.run(loadSubstriptionsSaga);

  return store;
}
