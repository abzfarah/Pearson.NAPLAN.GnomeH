import React, { Component } from 'react'
import { connect } from 'react-redux'
import StatementForm from './StatementForm'
import { getStatement, submitStatement } from '../../../actions/statementActions'

class StatementPage extends Component {

    constructor(props) {

        super(props)
        this.submitStatement = this.submitStatement.bind(this);
    }

    componentDidMount() {

        this.props.getStatement(101);
    }

    submitStatement(model) {

        this.props.submitStatement(model);
    }

    render() {

        const { isLoading, isLoaded, statementData } = this.props;

        return (
            <div >
                {isLoading && <span> Loading ...</span>}
                {isLoaded && <StatementForm statement={statementData} initialValues={statementData} submitStatement={this.submitStatement} />}
            </div >
        )
    }
}

function mapStateToProps(globalState) {
    debugger
    return {
        isLoading: globalState.statement.isLoading,
        isLoaded: globalState.statement.isLoaded,
        statementData: globalState.statement.statementData
    }
}

export default connect(mapStateToProps, { getStatement, submitStatement })(StatementPage)