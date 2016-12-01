import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import update from 'react-addons-update'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import AddAuthStaffContainer from './AddAuthStaffContainer'
import { getAuthStaffsAsync } from '../../../Actions/AuthStaffActions'
import '../../../styles/data-grid.css'
import Section from '../../common/Section'
import Heading from '../../common/Heading'
import Paragraph from '../../common/Paragraph'
import Box from '../../common/Box'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Snackbar, FontIcon } from 'material-ui'


class AuthStaff extends React.Component {

    static propTypes = {
        //  authStaffData: PropTypes.array.isRequired,

    };

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            isLoading: false,
            authStaffData: [],
            centerCode: ''
        }
        // this.formatLockout = this.formatLockout.bind()
    }

    componentWillReceiveProps(nextProps) {
       
        if (this.props.authStaffData != nextProps.authStaff) {
            this.setState({
                authStaffData: nextProps.authStaffData,
            });
        }

    }

    componentDidMount() {

        var currentYear = new Date().getFullYear();

        this.props.getAuthStaffsAsync(this.props.centerCode, currentYear);
    }

    handleUpdate(cell, row) {

        return <RaisedButton
            label="Edit"
            icon={<FontIcon className="muidocs-icon-custom-github" />}
            primary={true}
            fullWidth={false}
            style={{ width: 100 }} />
        //cell;

    }

    handleDelete(cell, row) {
        return <RaisedButton
            label="Delete"
            icon={<FontIcon className="muidocs-icon-custom-github" />}
            primary={true}
            fullWidth={false}
            style={{ width: 100 }} />
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    // formatLockout(cell, row) {
    //     return (
    //         <div>
    //             {cell && <h2>true </h2>}
    //             {!cell && <h3>---</h3>}
    //         </div>
    //     )
    // }

    render() {

        console.log(this.state.centerCode)
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose}
                />,
        ];
        return (
            <Box >
                <Section className="test">
                    <Heading tag="h2">
                        Authorised Staff

                    </Heading>
                    <RaisedButton
                        label="Add Contacts"
                        onTouchTap={this.handleOpen}
                        primary={true}
                        fullWidth={false}
                        style={{ marginBottom: 10, width: 200 }} />
                    <Dialog
                        title="Add School Contact"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        autoScrollBodyContent={true}
                        >
                        <AddAuthStaffContainer />
                    </Dialog>
                    <panel className='grid'>
                        <BootstrapTable data={this.state.authStaffData} striped={true} hover={true} selectRow={this.selectRowProp} tableStyle={{ width: 1300 }} >
                            <TableHeaderColumn dataField="userId" dataSort={true} width={200} isKey hidden> </TableHeaderColumn>
                            <TableHeaderColumn dataField="firstName" dataSort={true} width={200} columnTitle>First Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="lastName" dataSort={true} width={200} >Last Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="authUserRole" dataSort={true} width={200} >Role</TableHeaderColumn>
                            <TableHeaderColumn dataField="userName" dataSort={true} width={200} >User Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="receiveEmails" dataSort={true} width={200} >Receive Emails</TableHeaderColumn>
                            <TableHeaderColumn dataField="testAdmin" dataSort={true} width={200} >Test Admin</TableHeaderColumn>
                            <TableHeaderColumn dataField="email" dataSort={true} width={200} >Email</TableHeaderColumn>
                            <TableHeaderColumn dataField="userId" width={200} dataFormat={(cell, row) => { return this.handleUpdate(cell, row) } }>  </TableHeaderColumn>
                            <TableHeaderColumn dataField="userId" width={200} dataFormat={(cell, row) => { return this.handleDelete(cell, row) } }>  </TableHeaderColumn>
                        </BootstrapTable>
                    </panel>
                </Section>
            </Box>
        )
    }
}

function mapStateToProps(globalState) {


    //--TODO 
    //-- Temp way as golablState.School.currentSchool doesnt have value
    var schoolJSON = JSON.parse(sessionStorage.userSession);
    var centerCode = '';
    if (schoolJSON.schoolCode) {
        centerCode = schoolJSON.schoolCode;
    }

    return {
        // centerCode: globalState.school.currentSchool.currentSchoolCode,
        centerCode: centerCode,
        isLoading: globalState.manageSchool.isLoading,
        authStaffData: globalState.authStaff.authStaffList,
        error: globalState.manageSchool.error
    }
}


export default connect(mapStateToProps, { getAuthStaffsAsync })(AuthStaff)