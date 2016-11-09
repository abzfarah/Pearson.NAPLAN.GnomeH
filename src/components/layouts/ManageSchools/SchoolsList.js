import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import { schoolSearchAsync } from '../../../actions/schoolActions'
import { manageSchoolsAsync, submitSchoolAsync } from '../../../actions/manageSchoolActions'

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
            snackMessage: '',
            centreCode: null
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.submitForm = this.submitForm.bind(this);


    }

    componentDidMount() {
        var keyWord = '';
        this.props.manageSchoolsAsync(keyWord);
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            schoolData:
            nextProps.schoolData
        });
    }

    handleOpen = (centreCode) => {
        console.log(centreCode)

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

        // console.log(row);
        //   console.log("selected: " + isSelected)
        if (isSelected) {
            //--handle delete
            //  this.setState({ selectedSchool : })
        }
    }

    onSelectAll(isSelected) {
        //  console.log("is select all: " + isSelected);
    }

    selectRowProp = {
        mode: "checkbox",
        clickToSelect: false,
        bgColor: "rgb(238, 193, 213)",
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
    render() {

        const { schoolData } = this.props;
        //--TODO 
        //-should use shared const
        let sectorType = {
            G: "G",
            I: "I",
            C: "C"
        }

        const actions = [
            <FlatButton
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

        return (
            <Box className="form-container">
                <Section className="test">
                    <Heading tag="h2">
                        <div className="numberCircle">1</div>
                        Manage Schools
                        <h1></h1>
                    </Heading>
                    <RaisedButton
                        label="Add New School"
                        icon={<FontIcon className="muidocs-icon-custom-github" />}
                        onTouchTap={this.handleOpen}
                        primary={true}
                        fullWidth={false}
                        style={{ marginBottom: 10, width: 200 }} />

                    <Dialog
                        title="Add School"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                        autoDetectWindowHeight={true}
                        >
                        <AddSchoolContainer actions={actions} submitForm={this.submitForm} ref={'addSchoolForm'} centreCode={this.state.centreCode} />
                    </Dialog>

                    <panel className='grid'>
                        <BootstrapTable data={this.state.schoolData} striped={true} hover={true} pagination={true} selectRow={this.selectRowProp}>
                            <TableHeaderColumn dataField="centreCode" isKey={true} width={200} dataSort={true}  dataFormat={(cell, row) => { return this.handleUpdate(cell, row) } }>School Code</TableHeaderColumn>
                            <TableHeaderColumn dataField="centreCode" dataSort={true} width={200} filter={{ type: "TextFilter", placeholder: "search by Code" }}>School Code</TableHeaderColumn>
                            <TableHeaderColumn dataField="sector" dataSort={true} width={200} filter={{ type: "SelectFilter", options: sectorType }}>Sector</TableHeaderColumn>
                            <TableHeaderColumn dataField="centreName" dataSort={true} filter={{ type: "TextFilter", placeholder: "Search by Name" }}>School Name</TableHeaderColumn>
                        </BootstrapTable>
                    </panel>
                    <Snackbar
                        open={this.state.openSnack}
                        message={this.state.snackMessage}
                        autoHideDuration={4000}
                        onRequestClose={this.handleSnackClose}
                        style={{ color: 'green' }}
                        />
                </Section>
            </Box>

        )
    }
}

function mapStateToProps(globalState) {

    return {
        isLoading: globalState.manageSchool.isLoading,
        schoolData: globalState.manageSchool.schoolDataList
    }
}

export default connect(mapStateToProps, { manageSchoolsAsync })(SchoolList)
 //<RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />