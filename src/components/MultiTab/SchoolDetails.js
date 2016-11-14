import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import { RadioButton, MenuItem } from 'material-ui'
import { Checkbox, RadioButtonGroup, SelectField, TextField } from 'redux-form-material-ui'



class SchoolDetails extends React.Component {

  constructor() {
      super();
      this.state = {
        currentSchool: {},
      }
  }
    


    componentWillMount() {
      var x =3;
    }

    componentWillUnmount() {
      var r = 3;
    }

  

  componentWillUpdate(props, state) {
    return false
  }

    render() {

      const { handleSubmit, pristine, reset, submitting, validated} = this.props



        return (
     

        )
    }
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SchoolDetails = reduxForm({
  form: 'SchoolDetails',
  validate,
})(SchoolDetails)



export default SchoolDetails
