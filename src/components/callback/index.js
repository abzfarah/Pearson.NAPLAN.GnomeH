import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import Box from '../common/Box';
import Tab from '../common/Tab';
import Tabs from '../common/Tabs';
import  CallbackComponent  from './CallbackComponent';
import { push } from 'react-router-redux';
import auth from '../../routes/utils/auth'

class CallbackPage extends React.Component {

  componentWillMount() {


      var hey = this.props

  }

  componentDidlMount() {


      var hewy = this.props

  }

  successCallback = (user) => {
    const { dispatch } = this.props;
    const loggedIn = auth.loggedIn();


    const claims = user.profile;

    var userSession = JSON.stringify(user.profile)
    sessionStorage.setItem('userSession', userSession);

    var x = userSession;
    debugger;


    dispatch({
        type: 'USER_LOGGEDIN',
        loggedIn,
        payload: claims
    })
    this.props.dispatch(push('/home'));
    this.userCallback = user;
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
