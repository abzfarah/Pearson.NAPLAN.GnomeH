import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import Box from '../common/Box';
import Tab from '../common/Tab';
import Tabs from '../common/Tabs';
import  CallbackComponent  from './CallbackComponent';
import { push } from 'react-router-redux';

class CallbackPage extends React.Component {

  componentWillMount() {
  }

  componentDidlMount() {
  }

  successCallback = (user) => {
    const { dispatch } = this.props;
    const claims = user.profile;
    var userSession = JSON.stringify(user.profile)
    sessionStorage.setItem('userSession', userSession);
    this.props.dispatch(push('/home'));
  }

  render() {
    return (
      <CallbackComponent successCallback={this.successCallback.bind(this)} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(CallbackPage);
