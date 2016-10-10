import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import createSagaMiddleware from 'redux-saga';
import { loadSubscriptionsSaga } from '../sagas';
import userManager from '../components/utils/oidc/userManager';

const oidcMiddleware = createOidcMiddleware(userManager, null, false, '/callback');
const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);
sagaMiddleware.run(loadSubscriptionsSaga);
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
