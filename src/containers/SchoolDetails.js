import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as schoolDetailsActions from '../actions/schoolDetailsActions';
import userManager from '../components/utils/oidc/userManager';
import SchoolDetailsLayout from '../components/layouts/SchoolDetails'
import SchoolDetailsForm from '../components/layouts/SchoolDetails/SchoolDetailsForm'

// import { push } from 'react-router-redux';

class SchoolDetails extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser (event) {
    event.preventDefault();
    userManager.signoutRedirect();
  }

  render (){

    const { user } = this.props;

    return (
      <div>
          <SchoolDetailsLayout onLogoutClick={this.logoutUser} />
          <SchoolDetailsForm />
      </div>
    );
  }

}

SchoolDetails.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    user: state.oidc.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(schoolDetailsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetails);
