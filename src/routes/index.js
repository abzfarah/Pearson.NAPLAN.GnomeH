import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';
import RegistrationContainer from '../containers/RegistrationContainer'
import AuthorizedStaff from  '../components/MultiTab/AuthStaff/AuthStaff'
//import ManageUsersContainer from '../containers/ManageUsersContainer'
import ManageSchools from '../components/layouts/ManageSchools';
import StatementContainer from '../containers/StatementContainer';
import SchoolDetailsContainer from '../containers/SchoolDetailsContainer'
import SummaryTable from '../containers/SummaryTable';

import session from '../utils/session'

export default {
  path: '/',
  indexRoute: { onEnter: redirectToHome },
  component: AppContainer,
  childRoutes: [
      { 
        path:'/school',
        component: RegistrationContainer,
        indexRoute: {component: SummaryTable},
        childRoutes: [
          { path: 'summary',             component: SummaryTable},
          { path: 'soc',                 component: StatementContainer },
         { path: 'authorisedstaff',     component: AuthorizedStaff },
          { path: 'schooldetails',       component: SchoolDetailsContainer }
    //      { path: 'studentregistration', component: Summary },
      ]
      },
      { 
        path: '/manageschools', 
        component: ManageSchools 
      },

      { path:'/callback', 
        component: CallbackPage
      },
  ]
}



function render(nextState, replaceState) {
  if (session.login)
    replaceState({ nextPathname: nextState.location.pathname }, '/school')
}

function redirectToHome(nextState, replace) { 
  if (session.isAdmin) { 
    replace('/manageschools') 
  } 
  else if (session.schoolcode) {
    replace('/school') 
  }

}
      
function renderRoot(nextState, replace) {
  if (1) { replace('/school') }

}
    