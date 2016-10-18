import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'

import store from '../store';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import AppContainer from '../containers/AppContainer';
import SchoolUserPage from '../components/layouts/SchoolUserPage';
import AdminPage from '../components/layouts/AdminPage';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';

const history = syncHistoryWithStore(browserHistory, store);

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.oidc.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

const AdminIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.oidc.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'AdminIsAuthenticated' // a nice name for this auth check
})




export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={PublicPage}/>
        <Route path="/callback" component={CallbackPage} />
        <Route path="/user" component={SchoolUserPage} />
        <Route path="/admin" component={UserIsAuthenticated(AdminPage)} />

     </Route>
   </Router>
  );
}
