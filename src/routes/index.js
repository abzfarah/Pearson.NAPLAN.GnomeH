import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'

import store from '../store';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import CoreLayout from '../masterLayouts/CoreLayout/CoreLayoutPage';
import LoginPage from '../components/layouts/LoginPage';
import CallbackPage from '../components/callback';
import ErrorPage from '../components/ErrorPage';

const history = syncHistoryWithStore(browserHistory, store);

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.oidc.user, // how to get the user state
  authenticatingSelector: state => state.oidc.isLoadingUser, // wait for async loading of user to complete
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

// Admin Authorisation
const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => user.isAdmin,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAdmin',
  allowRedirectBack: false
})


export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/login" component={LoginPage} />
      <Route path="/callback" component={UserIsAuthenticated(CallbackPage)} />
      <Route path="/home" component={CoreLayout} />
      <Route path="/error" component={ErrorPage} />
    </Router>
  );
}
