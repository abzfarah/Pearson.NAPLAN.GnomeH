import React from 'react';
import ReactDOM from 'react-dom';


import createStore from './store';
import AppContainer from './containers/AppContainer';
import LoginPage from './components/layouts/LoginPage';
import Routes from './routes';
import {Provider} from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import userManager from './components/utils/oidc/userManager';
import MuiThemeProvider from './components/utils/materialStyles/MuiThemeProvider';
const initialState = window.___INITIAL_STATE__;
import store from './store';

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
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>

          <MuiThemeProvider>
            <Routes />
          </MuiThemeProvider>

      </OidcProvider>
    </Provider>,
    MOUNT_NODE
  )
}


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
