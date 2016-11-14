import React, { Component, PropTypes } from 'react';
import FormMessages from 'redux-form-validation';
import { Field, reduxForm } from 'redux-form'

import {Button, Box, Heading, Paragraph, Footer, Form, FormField, Section, Tab, Tabs} from '../common'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../common/Table';





class Statement extends Component {

    constructor() {
    super();

    this.state = {
      currentSchool: "",
      statementData: {}
    }
  }

  componentWillUpdate(props, state) {
    return true
  }

  componentWillReceiveProps(nextProps) {

  if ( !_.isEqual(this.state.statementData , nextProps.statementData) ) {
      this.setState({ statementData: nextProps.statementData  })
      this.props.initialize(nextProps.statementData);  
    }
  }

  componentWillMount() {
    console.log('statement mounted')
  }

  componentWillUnmount() {
    console.log('component unmounted')
  }

  render() {

  
  
  return (
  
    )
  }
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()




export default Statement