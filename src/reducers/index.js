import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import * as schoolReducers from './schoolReducer'

import errorReducer from './error';
debugger;
const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    error: errorReducer,
    schoolReducers: schoolReducers
  }
);
debugger;

export default reducer;
