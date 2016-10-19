import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import * as userReducers from './userReducer'
import * as schoolReducer  from './schoolSearch.js'

import errorReducer from './error';

const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    error: errorReducer,
    userReducers: userReducers,
    schoolReducers: schoolReducer

  }
);

export default reducer;
