import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { getAuthStaffsAsync } from '../../../Actions/AuthStaff'


class AuthStaff extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.getAuthStaffsAsync();
    }
    render() {
        return (
            <h2>This is new authorized staff page</h2>
        )
    }
}


function mapStateToProps(globalState) {

    return {

    }
}

function mapDispatchToProps() {

    return {
        getAuthStaffsAsync: getAuthStaffsAsync
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthStaff)
//export default AuthStaff