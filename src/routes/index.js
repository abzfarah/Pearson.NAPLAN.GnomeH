import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'

import store from '../store';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import AppContainer from '../masterLayouts/AppContainer';
import PublicPage from '../masterLayouts/PublicPage';
import HomePage from '../masterLayouts/HomePage';
import LoginPage from '../components/layouts/LoginPage';
import CallbackPage from '../components/callback';
import ErrorPage from '../components/ErrorPage';

const history = syncHistoryWithStore(browserHistory, store);

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.oidc.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

const AdminIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.oidc.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})



export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={PublicPage}/>
        <Route path="/callback" component={CallbackPage} />
        <Route path="/home" component={HomePage} />

     </Route>
   </Router>
  );
}
