import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Statement from './Statement'
import * as statementActions from '../../actions/statementActions';
import { getStatement, submitStatement } from '../../actions/statementActions'
import _ from 'lodash';
class StatementContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      currentSchool: {},
      statementData: {},
      form: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {

    data["securityLevel"] = parseInt(data["securityLevel"])   //Api expects securitylevel property to be an integer
    this.props.actions.submitStatement(data)
  }

  componentWillReceiveProps(nextProps) {

    if (!_.isEqual(this.state.currentSchool, nextProps.currentSchool)) {
      this.setState({ currentSchool: nextProps.currentSchool })
      this.props.actions.getStatement(nextProps.currentSchool.code)
    }

    if (!_.isEqual(this.state.statementData, nextProps.statementData)) {
      let level = nextProps.statementData["securityLevel"].toString()
      nextProps.statementData["securityLevel"] = level
      this.setState({ statementData: nextProps.statementData })
    }

    if (_.isEqual(this.state.form.values, nextProps.form.values)) {
      this.setState({ form: nextProps.form })
    }
  }

  render() {

    let { currentSchool, statementData } = this.state
    return (
      <Statement onSubmit={this.handleSubmit} statementData={statementData} />
    )
  }
}

function mapStateToProps(state) {
  return {
    currentSchool: state.currentSchool.currentSchool,
    statementData: state.statement.statementData,
    form: state.form.Statement
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(statementActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementContainer);
