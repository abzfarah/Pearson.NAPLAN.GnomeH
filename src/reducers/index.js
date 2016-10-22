import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import { reducer as formReducer } from 'redux-form'
import schoolReducer from './schoolReducer'
import statementReducer from './statementReducer'


import errorReducer from './error';

const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    form : formReducer,
    error: errorReducer,
    school: schoolReducer,
    statement : statementReducer
  }
);

export default reducer;
