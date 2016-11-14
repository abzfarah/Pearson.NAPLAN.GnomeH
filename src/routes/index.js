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
import RegistrationContainer from '../containers/RegistrationContainer'
import ManageUsersContainer from '../containers/ManageUsersContainer'
//import ManageSchoolsContainer from '../containers/ManageSchoolsContainer'
import ManageSchools from '../components/layouts/ManageSchools'
import session from './utils/session'

export default {
  path: '/',
  component: AppContainer,
  childRoutes: [
      { 
        path:'/school',
        component: RegistrationContainer,
      },
      { path: '/manageschools', 
        component: ManageSchools 
      },
      { path:'/manageusers', 
        component: ManageUsersContainer 
      },
      { path:'/callback', 
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
      


