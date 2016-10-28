import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { schoolSearchAsync } from '../actions/schoolActions'

import SchoolName from './SchoolName'



class SchoolNameContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            schoolName: false,
            schoolCode: false
        }

    }

    shouldComponentUpdate(nextProps, nextState) {

      debugger;
      if ( nextState.loggedIn == true | nextProps.loggedIn == true) {
        this.state.loggedIn = true
      }
      return true;

    }

    componentWillUpdate(nextProps, nextState) {

      var g= 3;

    }



    componentWillReceiveProps(nextProps, nextState) {

      var i = 5;

    }



    render() {

        return (

          <SchoolName
              claims={this.props.claims}
              loggedIn={this.props.loggedIn}
              schoolName={this.props.schoolName}
              schoolCode={this.props.schoolCode}
          />

        )
    }
}


function mapDispatchToProps(dispatch) {
  return {
      dispatch
  };
}

function mapStateToProps(globalState) {

    return {
        isLoading: globalState.school.isLoading,
        schoolData: globalState.school.schoolData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolNameContainer)
