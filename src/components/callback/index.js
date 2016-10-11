import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import  CallbackComponent  from './CallbackComponent';
import CoreLayout from '../../masterLayouts/CoreLayout/CoreLayoutPage';
import { push } from 'react-router-redux';

class CallbackPage extends React.Component {
  successCallback = (user) => {
    if (user == null || user.state == null || user.state.redirectUrl == null) {

        return;
      }


    this.props.dispatch(push('/callback'));
  }

  render() {
    return (
      <CallbackComponent successCallback={this.successCallback.bind(this)}>
        <CoreLayout/>

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
