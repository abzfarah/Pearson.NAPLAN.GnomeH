import React, { PropTypes } from 'react';
import CoreLayout from './CoreLayout';
import { bindActionCreators } from 'redux';
import * as coreLayoutActions from '../../actions/coreLayoutActions';
import { connect } from 'react-redux';
import userManager from '../../components/utils/oidc/userManager';

class CoreLayoutPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(event) {
    event.preventDefault();
    userManager.signoutRedirect();
    // userManager.signoutRedirectCallback('http://localhost:8004/login');
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

}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coreLayoutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoreLayoutPage);
