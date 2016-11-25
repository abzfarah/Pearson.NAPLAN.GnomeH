import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthStaffModal from './AuthStaffModal'


class AddAuthStaffContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { authStaffData } = this.props
        return (
            <div style={{ maxHeight: 390, width: 550 }}>
                <AuthStaffModal
                    initialValues={authStaffData}
                    ref={'authForm'} />
            </div>
        )
    }
}

function mapStateToProps(globalState) {

    var authStaffData = { testdelivery: true, testAdmin: true };
    return {
        authStaffData: authStaffData
    }
}

export default connect(mapStateToProps, null, null, { withRef: true })(AddAuthStaffContainer)