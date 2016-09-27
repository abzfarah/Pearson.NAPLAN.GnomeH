import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Link from 'react-router/Link';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import CoreLayout from './masterLayouts/CoreLayout/CoreLayout';
import LoginPage from './components/layouts/LoginPage';
import { NamedLink, matchRoutesToLocation, RoutesProvider, MatchWithRoutes } from 'react-router-addons-routes';
import routes from './routes';
import {Provider} from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import userManager from './utils/userManager';

const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }
}


// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {

  ReactDOM.render(
    <RoutesProvider routes={routes}>
      <Provider store={store}>
          <OidcProvider store={store} userManager={userManager}>
              <Router>
              <div>
                {routes.map(route => <MatchWithRoutes {...route}/>)}
              </div>
              </Router>
          </OidcProvider>
      </Provider>
    </RoutesProvider>,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () => {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    })
  }
}

// ========================================================
// Go!
// ========================================================
render()
