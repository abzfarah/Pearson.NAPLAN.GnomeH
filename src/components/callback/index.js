import React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import CoreLayout from '../../masterLayouts/CoreLayout/CoreLayoutPage';
import { push } from 'react-router-redux';

class CallbackPage extends React.Component {
  successCallback = () => {
    this.props.dispatch(push('/'));
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
