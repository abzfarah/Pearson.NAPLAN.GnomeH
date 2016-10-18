import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import Box from '../common/Box';
import Tab from '../common/Tab';
import Tabs from '../common/Tabs';
import  CallbackComponent  from './CallbackComponent';
import { push } from 'react-router-redux';


class CallbackPage extends React.Component {
  successCallback = (user) => {

    if (user.profile.role == "Idm_Admin") {
        this.props.dispatch(push('/admin'));
    }

    else if (user.profile.schoolCode){
       this.props.dispatch(push('/user'));
    }

    else {
       this.props.dispatch(push('/'));
    }

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
