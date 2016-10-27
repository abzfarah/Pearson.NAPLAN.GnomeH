import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import { reducer as formReducer } from 'redux-form'
import schoolReducer from './schoolReducer'
import schoolDetailsReducer from './schoolDetailsReducer'



import statementReducer from './statementReducer'
import sessionReducer from './sessionReducer'


import errorReducer from './error';

export const USER_LOGGEDIN = 'USER_LOGGEDIN';



const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    form : formReducer,
    error: errorReducer,
    school: schoolReducer,
    statement : statementReducer,
    session: sessionReducer,
    form: formReducer,
    schoolDetails: schoolDetailsReducer
  }
);

export default reducer;
