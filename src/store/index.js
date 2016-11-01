import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import userManager from '../components/utils/oidc/userManager';
import { reduxSearch } from 'redux-search';

const oidcMiddleware = createOidcMiddleware(userManager, null, false, '/callback', null);
const enhancers = [];
const initialState = {};

const enhancer = 
  reduxSearch({
    // Configure redux-search by telling it which resources to index for searching
    resourceIndexes: {
      // In this example Books will be searchable by :title and :author
      schools: ['name', 'code']
    },
    // This selector is responsible for returning each collection of searchable resources
    resourceSelector: (resourceName, state) => {
      // In our example, all resources are stored in the state under a :resources Map
      // For example "books" are stored under state.resources.books
      return state.resources.get(resourceName)
    }
  })


  const store = compose(  
	  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), thunkMiddleware, logger()),
	  reduxSearch({
	    resourceIndexes: {
	     
	      books: ['author', 'title']
	    }
	  })
	)(createStore)(reducer)



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
