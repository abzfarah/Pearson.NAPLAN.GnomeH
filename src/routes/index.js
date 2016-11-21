import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';
import RegistrationContainer from '../containers/RegistrationContainer'
import ManageUsersContainer from '../containers/ManageUsersContainer'
import ManageSchools from '../components/layouts/ManageSchools';
import session from '../utils/session'

export default {
  path: '/',
  indexRoute: { onEnter: redirectToHome },
  component: AppContainer,
  childRoutes: [
      { 
        path:'/school',
        component: RegistrationContainer,
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

function render(nextState, replaceState) {
  if (session.login)
    replaceState({ nextPathname: nextState.location.pathname }, '/school')
}

function redirectToHome(nextState, replace) { 
  if (session.isAdmin) { 
    replace('/manageschools') 
  } 

  else {
    replace('/school') 
  }

}
      
function renderRoot(nextState, replace) {
  if (1) { replace('/school') }

}
      


