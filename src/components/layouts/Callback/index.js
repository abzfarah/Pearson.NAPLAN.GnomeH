import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { bindActionCreators } from 'redux';
import CoreLayout from '../../../masterLayouts/CoreLayout/CoreLayout';
import * as coreLayoutActions from '../../../actions/coreLayoutActions';
import userManager from '../../../components/utils/oidc/userManager';
import { push } from 'react-router-redux';

class CallbackPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.logoutUser = this.logoutUser.bind(this);
    this.successCallback = this.successCallback.bind(this);
  }

  successCallback = () => {
    this.props.dispatch(push('/callback'));
  }

  logoutUser(event) {
    event.preventDefault();
    userManager.signoutRedirect();
  }

  render() {

    const { user } = this.props;

    return (
      <CallbackComponent successCallback={this.successCallback}>
        <CoreLayout onLogoutClick={this.logoutUser} name={user ? user.profile.name : null} />
      </CallbackComponent>
    );
  }
}

CallbackPage.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(coreLayoutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CallbackPage);
