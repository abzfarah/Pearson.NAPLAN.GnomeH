import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import  '../styles/index.scss'
class AppContainer extends Component {


  render () {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ }}>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
