import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Box, Button, Header } from '../components/common';
import { loadSchools } from '../actions/searchActions'
import { getClaims } from '../components/utils/getClaims'
import FormContainer from './FormContainer'
import userManager from '../utils/userManager';
import session from '../routes/utils/session'
import _ from 'lodash';

class SchoolContainer extends React.Component {

  constructor(props) {
    super(props);
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

   onLoginButtonClick = (event) => {

  };

    onLogoutButtonClick = (event, dispatch) => {

  }

  componentWillMount(props) {

  }

  componentWillReceiveProps(nextProps, nextState) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(props, state) {

  }

  componentDidMount(props, state) {

  }

  render() {

    return (
      <div>
        <FormContainer claims={this.props.claims} />

        { this.props.children }

      </div>
     )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        loggedIn: state.loggedIn,
        claims: state.claims.claims
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SchoolContainer);
