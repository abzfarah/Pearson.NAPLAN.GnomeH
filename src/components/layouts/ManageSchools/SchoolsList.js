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
            open: false
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

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }
    submitForm = (model) => {
        this.props.submitSchoolAsync(model)
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
                onTouchTap={this.handleClose}
                />,
        ];

        return (
            <Box className="form-container"> 
            <Section >
                <Heading tag="h2">
                    <div className="numberCircle">1</div>
                    Manage Schools
                         </Heading>
                <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Add School"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    >
                    <AddSchoolContainer actions={actions} submitForm={this.submitForm} />
                </Dialog>
                <panel>
                    <BootstrapTable data={this.state.schoolData} striped={true} hover={true} pagination={true}>
                        <TableHeaderColumn dataField="sector" dataSort={true} filter={{ type: "SelectFilter", options: sectorType }}>Sector</TableHeaderColumn>
                        <TableHeaderColumn dataField="centreCode" isKey={true} dataSort={true} filter={{ type: "TextFilter", placeholder: "search by Code" }}>School Code</TableHeaderColumn>
                        <TableHeaderColumn dataField="centreName" dataSort={true} filter={{ type: "TextFilter", placeholder: "Search by Name" }}>School Name</TableHeaderColumn>
                    </BootstrapTable>
                </panel>
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