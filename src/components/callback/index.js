import React from 'react'
import { connect } from 'react-redux';
import { push } from 'react-router-redux'


class CallbackPage extends React.Component {

  successCallback = (user) => {
    const { dispatch } = this.props;
    const claims = user.profile;


    var userSession = JSON.stringify(user.profile)
    sessionStorage.setItem('userSession', userSession);
    this.props.dispatch(push('/'));
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
  }
}

export default connect(null, mapDispatchToProps)(CallbackPage);
