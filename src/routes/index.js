import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import SchoolUserPage from '../components/layouts/SchoolUserPage';
import AdminPage from '../components/layouts/AdminPage';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';
import StatementContainer from  '../components/MultiTab/StatementContainer';
import Home from  '../components/MultiTab/Home';
import SchoolDetails from  '../components/MultiTab/SchoolDetailsContainer';
import AuthorizedStaff from  '../components/MultiTab/AuthorizedStaff';
import FormContainer from '../containers/FormContainer';
import SchoolContainer from '../containers/SchoolContainer'
import ManageUsersContainer from '../containers/ManageUsersContainer'
import ManageSchoolsContainer from '../containers/ManageSchoolsContainer'
import session from './utils/session'


export default {
  path: '/',
  indexRoute: { onEnter: renderRoot },
  component: AppContainer,
  childRoutes: [
      { 
        path: '/school',  
        indexRoute: '/school/summary',
        component: SchoolContainer,
        childRoutes: [                                
          { path: 'summary', component: Home },   
          { path: 'statement',  component: StatementContainer },
          { path: 'schooldetails',  component: SchoolDetails },
          { path: 'authorisedstaff',  component: AuthorizedStaff },
        ] 
      },

      { path: '/manageschools', 
        component: ManageSchoolsContainer 
      },

      { path: '/manageusers', 
        component: ManageUsersContainer 
      },

      { path: '/callback', 
        component: CallbackPage
      },
  ]

}


function redirectToLogin(nextState, replace) {
  if (!session.login) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
   }
}

function redirectToHome(nextState, replace) { 
  if (session.login) { replace('/') } }
      
function renderRoot(nextState, replace) {
  if (session.login) { replace('/school/summary')}}
      


