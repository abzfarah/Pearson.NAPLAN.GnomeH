import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import { schoolSearchAsync } from '../../../actions/schoolActions'
import { manageSchoolsAsync } from '../../../actions/manageSchoolActions'
import './data-grid.css'
import Section from '../../common/Section'
import Heading from '../../common/Heading'
import Paragraph from '../../common/Paragraph'
import Box from '../../common/Box'

class SchoolList extends React.Component {

    static propTypes = {
        schoolData: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        //--defauls values
        this.state = {
            isLoading: false,
            schoolData: []
        }
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

    render() {
        //--TODO 
        //-should use shared const
        let sectorType = {
            G: "G",
            I: "I",
            C: "C"

        }
        return (
            <div>
                <Section >
                    <Box >
                        <Heading tag="h2">
                            <div className="numberCircle">1</div>
                            Manage Schools
                         </Heading>
                        <panel>
                            <BootstrapTable data={this.state.schoolData} striped={true} hover={true} pagination={true}>
                                <TableHeaderColumn dataField="sector" dataSort={true} filter={{ type: "SelectFilter", options: sectorType }}>Sector</TableHeaderColumn>
                                <TableHeaderColumn dataField="centreCode" isKey={true} dataSort={true} filter={{ type: "TextFilter", placeholder: "search by Code" }}>School Code</TableHeaderColumn>
                                <TableHeaderColumn dataField="centreName" dataSort={true} filter={{ type: "TextFilter", placeholder: "Search by Name" }}>School Name</TableHeaderColumn>
                            </BootstrapTable>
                        </panel>
                    </Box>
                </Section>
            </div>)
    }
}

function mapStateToProps(globalState) {

    return {
        isLoading: globalState.manageSchool.isLoading,
        schoolData: globalState.manageSchool.schoolDataList

    }
}

export default connect(mapStateToProps, { manageSchoolsAsync })(SchoolList)
