import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import Box from '../Box';
import Tab from '../Tab';
import Tabs from '../Tabs';
import HomePage from '../../masterLayouts/HomePage';
import { CallbackComponent } from 'redux-oidc';
import { push } from 'react-router-redux';


class CallbackPage extends React.Component {
  successCallback = () => {
    this.props.dispatch(push('/home'));
  }

  render() {
    return (
      <CallbackComponent successCallback={this.successCallback.bind(this)} >
          <div >
            <HomePage/>
          </div>
      </CallbackComponent>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(CallbackPage);
