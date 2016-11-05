import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import SchoolUserPage from '../components/layouts/SchoolUserPage';
import AdminPage from '../components/layouts/AdminPage';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';
import StatementContainer from  '../components/MultiTab/StatementContainer';
import Home from  '../components/MultiTab/Home';
import SchoolDetails from  '../components/layouts/SchoolDetails/SchoolDetailsForm';
import AuthorizedStaff from  '../components/MultiTab/AuthorizedStaff';
import FormContainer from '../containers/FormContainer';
import session from './utils/session'

function redirectToLogin(nextState, replace) {
  if (!session.login) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
  }
}

function redirectToHome(nextState, replace) {
  if (session.login) {
      replace('/home')
  }
}

export default {
  path: '/',
  component: AppContainer,
  childRoutes: [
    {
      onEnter: redirectToLogin,
      path: '/home',
      component: FormContainer,
      childRoutes: [
          { path: 'summary',  component: Home },
          { path: 'statement',  component: StatementContainer },
          { path: 'schooldetails',  component: SchoolDetails },
          { path: 'authorisedstaff',  component: AuthorizedStaff }       
      ],
    },
    { path: 'callback',  component: CallbackPage }
  ]
}

