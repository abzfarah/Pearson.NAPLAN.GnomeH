import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import schoolReducer from './schoolReducer'
import sessionReducer from './sessionReducer'

import errorReducer from './error';

export const USER_LOGGEDIN = 'USER_LOGGEDIN';



const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    error: errorReducer,
    school: schoolReducer,
    session: sessionReducer,
  }
);

export default reducer;
