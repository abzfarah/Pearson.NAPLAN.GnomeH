import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SchoolDetails from './SchoolDetails'
import * as detailsActions from '../../actions/schoolDetailsActions';
import _ from 'lodash';

const details_post =
    [ 'centreCode',
      'phone',
      'fax',
      'email',
      'reviewed',
      'requestPackingOrder',
      'packingOrderDetails'
    ]


class SchoolDetailsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      currentSchool: {},
      schoolData: {},
      schoolDetails: {},
      form: {},
      validated: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {

    let post = _.pick(data, details_post);

    post["requestedByID"] = null
    post["lastUpdatedDate"] = null
    post["lastUpdatedBy"] = null 
    this.props.actions.submitDetails(post)
  }
  componentWillReceiveProps(nextProps) {
    const current = window.location.pathname.replace(/^\/|\/$/g, '') == "school/schooldetails"
    if (!_.isEqual(this.state.currentSchool, nextProps.currentSchool) && current )  {
         this.setState({currentSchool: nextProps.currentSchool})
         this.props.actions.schoolDetailsAsync(nextProps.currentSchool.code)
    }

    if (!_.isEqual(this.state.schoolDetails, nextProps.schoolDetails) && current ) {
         this.setState({schoolDetails: nextProps.schoolDetails})
      }

    if (!_.isEqual(this.state.form.values,nextProps.form.values)  && current ) {
         this.setState({form: nextProps.form})
      }

    if (!nextProps.form.syncErrors &&  !_.isEmpty(nextProps.form.values)  && current ) {
        this.setState({validated: true})
    }  
  }

  render() {
    let { currentSchool, schoolDetails, validated } = this.state
    return (
      <SchoolDetails onSubmit={this.handleSubmit} schoolDetails={schoolDetails} validated={validated}/>
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
