import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';
import RegistrationContainer from '../containers/RegistrationContainer'
import ManageUsersContainer from '../containers/ManageUsersContainer'
import ManageSchools from '../components/layouts/ManageSchools';
import StatementContainer from '../containers/StatementContainer';
import SchoolDetailsContainer from '../containers/SchoolDetailsContainer';
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
        childRoutes: [
          { path: 'summary',             component: SummaryTable, onChange:yourHandler},
          { path: 'soc',                 component: StatementContainer },
   //       { path: 'authorisedstaff',     component: Summary },
          { path: 'schooldetails',       component: SchoolDetailsContainer }
    //      { path: 'studentregistration', component: Summary },
      ]
      },
      { 
        path: '/manageschools', 
        component: ManageSchools 
      },
      { 
        path:'/manageusers', 
        component: ManageUsersContainer 
      },
      { path:'/callback', 
        component: CallbackPage
      },
  ]
}


function yourHandler(previousRoute, nextRoute) {
 var x =3;
}

function render(nextState, replaceState) {
  if (session.login)
    replaceState({ nextPathname: nextState.location.pathname }, '/school')
}

function redirectToHome(nextState, replace) { 
  if (session.isAdmin) { 
    replace('/manageschools') 
  } 

}
      
function renderRoot(nextState, replace) {
  if (1) { replace('/school') }

}
    