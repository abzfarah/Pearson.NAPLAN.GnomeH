import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import { reducer as formReducer } from 'redux-form'
import currentSchool from './currentSchoolReducer'
import schoolDetailsReducer from './schoolDetailsReducer'

import statementReducer from './statementReducer'


export const USER_LOGGEDIN = 'USER_LOGGEDIN';



const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    form : formReducer,
    currentSchool: currentSchool,
    statement : statementReducer,
    schoolDetails: schoolDetailsReducer
  }
);

export default reducer;
