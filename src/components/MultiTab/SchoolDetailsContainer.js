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

    if (!_.isEqual(this.state.schoolData, nextProps.schoolData)) {
         this.setState({schoolData: nextProps.schoolData})
      }

    if (!_.isEqual(this.state.form.values,nextProps.form.values)) {
         this.setState({form: nextProps.form})
      }
  }

  render() {

    let { currentSchool, schoolData } = this.state
    return (
      <SchoolDetails onSubmit={this.handleSubmit} schoolData={schoolData}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentSchool: state.currentSchool.currentSchool,
    schoolData: state.schoolDetails.schoolDetails,
    form: state.form.SchoolDetails
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(detailsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetailsContainer);
