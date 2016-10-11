import React, { PropTypes } from 'react';
import CoreLayout from './CoreLayout';
import { bindActionCreators } from 'redux';
import * as coreLayoutActions from '../../actions/coreLayoutActions';
import { connect } from 'react-redux';
import userManager from '../../components/utils/oidc/userManager';
import { loadTokenInfo } from '../../actions/oidcActions';

import store from '../../store';

class CoreLayoutPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(event) {
    event.preventDefault();
    userManager.signoutRedirect();
  }

  componentWillMount() {
  const { user, dispatch } = this.props;
  console.log("MainPage.componentWillMount - Start");

  // check the user here and redirect to /login if necessary
  if (!user || user.expired) {
    //console.log('User is null or invalid - redirecting to login page!');
    //dispatch(push('/login'));
    return;
  }

    console.log("MainPage.componentWillMount - End");
}

  componentDidMount() {
      console.log("MainPage.componentDidMount - Start");
      console.log("MainPage.componentDidMount - End");

  }


  render() {

    return (
      <CoreLayout
        onLogoutClick={this.logoutUser}

      />
    );
  }
}

CoreLayoutPage.propTypes = {
    actions: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  debugger;

  const token = Object.assign({}, state.oidc);
  const to = Object.assign({}, userManager.getUser());
  const to1 = userManager.getUser();

  return {
    token: state.oidc
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coreLayoutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayoutPage);
