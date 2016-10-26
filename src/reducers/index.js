import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import schoolReducer from './schoolReducer'
import { reducer as formReducer } from 'redux-form'

import errorReducer from './error';

const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    error: errorReducer,
    school: schoolReducer,
    form: formReducer
  }
);

export default reducer;
