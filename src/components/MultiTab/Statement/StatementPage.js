import React, { Component } from 'react'
import { connect } from 'react-redux'
import StatementForm from './StatementForm'
import { getStatement, submitStatement } from '../../../actions/statementActions'

class StatementPage extends Component {

    constructor(props) {
        console.log('stPageeeeeeeees')
        super(props)
        this.submitStatement = this.submitStatement.bind(this);
    }

    componentDidMount() {


        var userSession = JSON.parse(sessionStorage.getItem('userSession'));

        if (userSession) {
            var schoolCode = userSession.schoolCode;
            //-- For Test
            //  schoolCode="01008"
        }

        if (schoolCode) {

            this.props.getStatement(schoolCode);
        }

    }

    submitStatement(model) {

        model.isConfirmed = false;
        model.securityLevel = +model.securityLevel;
        this.props.submitStatement(model);

    }

    render() {

        const { isLoading, isLoaded, statementData } = this.props;

        return (
            <div>
                {isLoading && <span> Loading ...</span>}
                {isLoaded && <StatementForm statement={statementData} initialValues={statementData} submitStatement={this.submitStatement} />}
            </div>
        )
    }
}

function mapStateToProps(globalState) {

    var statementData = globalState.statement.statementData;
    statementData.securityLevel = statementData.securityLevel + '';
    //--TODO just for test, remove plz
    //statementData.securityLevel = "0"
    return {
        isLoading: globalState.statement.isLoading,
        isLoaded: globalState.statement.isLoaded,
        statementData: statementData
    }
}

export default connect(mapStateToProps, { getStatement, submitStatement })(StatementPage)
