import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import update from 'react-addons-update'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import { schoolSearchAsync } from '../../../actions/schoolActions'
import { manageSchoolsAsync, deleteSchool, submitSchoolAsync } from '../../../actions/manageSchoolActions'

import AddSchoolContainer from './AddSchoolContainer'

import './data-grid.css'
import Section from '../../common/Section'
import Heading from '../../common/Heading'
import Paragraph from '../../common/Paragraph'
import Box from '../../common/Box'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Snackbar, FontIcon } from 'material-ui';


class SchoolList extends React.Component {

    static propTypes = {
        schoolData: PropTypes.array.isRequired,

    };

    constructor(props) {
        super(props);

        //--defauls values
        this.state = {
            isLoading: false,
            schoolData: [],
            //--handle Modal 
            open: false,
            openSnack: false,
            openConfirmation: false,
            snackMessage: '',
            centreCode: null,
            selectedSchool: 'test'
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.handleConfirmationCancel = this.handleConfirmationCancel.bind(this);
        this.handleConfirmationOK = this.handleConfirmationOK.bind(this);
    }

    componentDidMount() {
        var keyWord = '';
        this.props.manageSchoolsAsync(keyWord);
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            schoolData: nextProps.schoolData,
           // isDeleted: nextProps.isDeleted
        });

        
        if (nextProps.isDeleted) {
            var index = this.state.schoolData.findIndex(x => x.centreCode == this.state.selectedSchoolCode);
            this.state.schoolData.splice(index, 1);
            this.setState({ openSnack: true, snackMessage: 'School has been removed successfully!' })
        }
        else if (nextProps.isDeleted == false) {
            this.setState({ openSnack: true, snackMessage: 'An error occured !' })
        }

    }

    handleOpen = (centreCode) => {
        this.setState({ open: true, centreCode: centreCode });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleSnackClose = () => {
        this.setState({ openSnack: false })
    }

    submitForm = (model) => {
        this.props.submitSchoolAsync(model)
    }

    //--- grid_table
    onRowSelect(row, isSelected) {
        console.log(row);
    }

    onSelectAll(isSelected) {
        //  console.log("is select all: " + isSelected);
    }

    selectRowProp = {
        mode: "checkbox",
        clickToSelect: false,
        bgColor: "rgb(176,224,230)",
        onSelect: this.onRowSelect,
        onSelectAll: this.onSelectAll
    };
    handleUpdate(cell, row) {

        return <RaisedButton
            label="Edit"
            icon={<FontIcon className="muidocs-icon-custom-github" />}
            onTouchTap={(e) => {
                this.handleOpen(cell)
            } }
            primary={true}
            fullWidth={false}
            style={{ width: 100 }} />
        //cell;

    }
    deleteSchool(cell) {

        this.setState({ openConfirmation: true })
        this.setState({ selectedSchoolCode: cell })
        //    this.props.deleteSchool(cell)
    }

    handleConfirmationCancel() {

        this.setState({ openConfirmation: false })
    }

    handleConfirmationOK() {

        this.setState({ openConfirmation: false })

        var cell = this.state.selectedSchoolCode;
        this.props.deleteSchool(cell);
    
    

    }

    updateList() {

    }
    handleDelete(cell, row) {
        return <RaisedButton
            label="Delete"
            icon={<FontIcon className="muidocs-icon-custom-github" />}
            onTouchTap={(e) => {
                this.deleteSchool(cell)
            } }
            primary={true}
            fullWidth={false}
            style={{ width: 100 }} />
    }

    render() {
        console.log(this.state)
        const { schoolData } = this.props;
        //--TODO 
        //-should use shared const
        let sectorType = {
            C: "C",
            G: "G",
            H: "H",
            I: "I",
            O: "O"
        }

        const actions = [
            <FlatButton
                id="cancle"
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => {
                    this.refs.addSchoolForm.getWrappedInstance().doSubmit().then(() => {
                        this.handleClose()
                        this.setState({ openSnack: true, snackMessage: 'School detail has been added successfully!' })
                    }).catch(() => { })
                } }
                />,
        ];

        const actionsConfirm = [
            <FlatButton
                id="confirmCancel"
                label="Cancel"
                primary={true}
                onTouchTap={this.handleConfirmationCancel}
                />,
            <FlatButton

                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => {
                    this.handleConfirmationOK()

                } }
                />
        ];

        return (
            <Box className="form-container">
                <Section className="test">
                    <Heading tag="h2">
                        Manage Schools
                    </Heading>

                    <RaisedButton
                        id="addSchool"
                        label="Add New School"
                        icon={<FontIcon className="muidocs-icon-custom-github" />}
                        onTouchTap={this.handleOpen}
                        primary={true}
                        fullWidth={false}
                        style={{ marginBottom: 10, width: 200 }} />

                    <Dialog
                        title="Manage School"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                        autoDetectWindowHeight={true}>
                        <AddSchoolContainer actions={actions} submitForm={this.submitForm} ref={'addSchoolForm'} centreCode={this.state.centreCode} />
                    </Dialog>

                    <panel className='grid' style={{ width: 1050 }}>
                        <BootstrapTable data={this.state.schoolData} striped={true} hover={true} pagination={true} selectRow={this.selectRowProp}>
                            <TableHeaderColumn dataField="centreCode" isKey={true} width={200} dataFormat={(cell, row) => { return this.handleUpdate(cell, row) } }>Edit School</TableHeaderColumn>
                            <TableHeaderColumn dataField="centreCode" dataSort={true} width={200} filter={{ type: "TextFilter", placeholder: "search by Code" }}>School Code</TableHeaderColumn>
                            <TableHeaderColumn dataField="sector" dataSort={true} width={200} filter={{ type: "SelectFilter", options: sectorType }}>Sector</TableHeaderColumn>
                            <TableHeaderColumn dataField="centreName" dataSort={true} filter={{ type: "TextFilter", placeholder: "Search by Name" }}>School Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="centreCode" width={200} dataFormat={(cell, row) => { return this.handleDelete(cell, row) } }>Delete  School</TableHeaderColumn>
                        </BootstrapTable>
                    </panel>

                    <div id="ConfirmDialog">
                        <Dialog
                            title="Confirm delete school"
                            actions={actionsConfirm}
                            modal={false}
                            open={this.state.openConfirmation}>
                            <h5 id="ConfirmDialogTitle">Are you sure that you want to delete this school ?</h5>
                        </Dialog>
                    </div>
                    <Snackbar
                        open={this.state.openSnack}
                        message={this.state.snackMessage}
                        autoHideDuration={4000}
                        onRequestClose={this.handleSnackClose}
                        style={{ color: 'green' }} />
                </Section>
            </Box>
        )
    }
}

function mapStateToProps(globalState) {
    
    return {
        isLoading: globalState.manageSchool.isLoading,
        schoolData: globalState.manageSchool.schoolDataList,
        isDeleted: globalState.manageSchool.isDeleted,
        error: globalState.manageSchool.error
    }
}

export default connect(mapStateToProps, { manageSchoolsAsync, deleteSchool })(SchoolList)
 //<RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />