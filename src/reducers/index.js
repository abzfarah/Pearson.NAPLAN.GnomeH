import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import manageSchoolReducer from './manageSchoolsReducer'
import selectSchool from './selectSchoolReducer'
import { searchTerms, packagesBySearch } from './schoolSearchReducer'
import schoolDetailsReducer from './schoolDetailsReducer'
import authStaffReducer from './authStaffReducer'
import statementReducer from './statementReducer'
import statusReducer from './statusReducer'

export const USER_LOGGEDIN = 'USER_LOGGEDIN';

const reducers = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    form : formReducer,
    school: selectSchool,
    searchResults: packagesBySearch,
    search: searchTerms,
    status: statusReducer,
    statement : statementReducer,
    schoolDetails: schoolDetailsReducer,
    manageSchool: manageSchoolReducer,
    authStaff: authStaffReducer,
   toastr: toastrReducer
   
  }
);

export default reducers;
