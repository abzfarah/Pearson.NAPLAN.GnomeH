import React from 'react';
import Box from '../../common/Box';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';
import MultiTab from '../../MultiTab';
import Button from '../../common/Button';
import { StickyContainer, Sticky } from '../../common/Sticky';
import { connect } from 'react-redux';
import { errorRequest } from '../../../actions';
import CallbackComponent from '../../callback/CallbackComponent';

import { push } from 'react-router-redux';

class SchoolUserPage extends React.Component {



  render() {


    return (
      <div>

        </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    error: state.error.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolUserPage);
