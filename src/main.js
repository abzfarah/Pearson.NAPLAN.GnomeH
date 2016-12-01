import './styles/core.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import { OidcProvider } from 'redux-oidc'
import ReduxToastr from 'react-redux-toastr'
import userManager from './utils/userManager'
import MuiThemeProvider from './components/common/utils/MuiThemeProvider'
import getMuiTheme from './components/common/utils/getMuiTheme'

import { routes } from './routes'
import store from './store'

// eslint-disable-next-line no-unused-vars
const initialState = window.___INITIAL_STATE__
const history = syncHistoryWithStore(browserHistory, store)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <ReduxToastr timeOut={3500} newestOnTop={false} preventDuplicates={true} position="top-right"
          transitionIn="fadeIn" transitionOut="fadeOut" progressBar />
        <OidcProvider store={store} userManager={userManager}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Router
              history={history}
              routes={routes} />
          </MuiThemeProvider>
        </OidcProvider>
      </div>
    </Provider>
     ,
    MOUNT_NODE
  )
}


// ========================================================
// Developer Tools Setup, only used in __DEV__ mode
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
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
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}

// ========================================================
// Go!
// ========================================================
render()
