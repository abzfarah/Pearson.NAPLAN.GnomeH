import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SchoolDetails from './SchoolDetails'
import * as detailsActions from '../../actions/schoolDetailsActions';
import _ from 'lodash';

class SchoolDetailsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      currentSchool: {},
      schoolData: {},
      schoolDetails: {},
      form: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(data) {
    debugger
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.state.currentSchool, nextProps.currentSchool))  {
         this.setState({currentSchool: nextProps.currentSchool})
         this.props.actions.schoolDetailsAsync(nextProps.currentSchool.code)
    }

    if (!_.isEqual(this.state.schoolDetails, nextProps.schoolDetails)) {
         this.setState({schoolDetails: nextProps.schoolDetails})
      }

    if (!_.isEqual(this.state.form.values,nextProps.form.values)) {
         this.setState({form: nextProps.form})
      }
  }

  render() {
    let { currentSchool, schoolDetails } = this.state
    return (
      <SchoolDetails onSubmit={this.handleSubmit} schoolDetails={schoolDetails}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentSchool: state.currentSchool.currentSchool,
    schoolDetails: state.schoolDetails.schoolDetails,
    form: state.form.SchoolDetails
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(detailsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetailsContainer);
