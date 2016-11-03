import React, { Component, PropTypes } from 'react';
import Statement from './Statement'
import { getStatement, submitStatement } from '../../actions/statementActions'

class StatementContainer extends React.Component {

  constructor() {
    super();


  }

  handleSubmit() {
    var x =9;
    debugger;
  }

  componentWillMount() {
  }

  render() {
    return (
      <Statement handleSubmit={this.handleSubmit}/>
    )
  }
}

export default StatementContainer
