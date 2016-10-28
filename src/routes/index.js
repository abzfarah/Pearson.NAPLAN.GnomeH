import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import auth from './utils/auth.js'

import store from '../store';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import AppContainer from '../containers/AppContainer';
import SchoolUserPage from '../components/layouts/SchoolUserPage';
import AdminPage from '../components/layouts/AdminPage';
import CallbackPage from '../components/callback';
import PublicPage from '../components/layouts/PublicPage';
import TasksPage from '../components/layouts/TasksPage';
import manageUsers from '../components/layouts/manageUsers';


function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToHome(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/home')
  }
}


export default {
  component: AppContainer ,
  childRoutes: [

    {
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, PublicPage)
            })
          }
        }
        // ...
      ]
    },

    {
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/callback',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, CallbackPage)
            })
          }
        }
        // ...
      ]
    },

     //Home route
    {
      onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share the dashboard UI
        { path: 'home',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, AdminPage)
            })
          }
        }
        // ...
      ]
    },


    { onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share the dashboard UI
        { path: 'Tasks',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, TasksPage)
            })
          }
        }
        // ...
      ]
    }
  ]
}
