import React, { PureComponent } from 'react';
import { CardText } from '../components/Cards';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Section, Heading, Paragraph} from '../components/common';
import { connect } from 'react-redux';
import FontIcon from '../components/FontIcons';
import { sort } from '../components/utils/ListUtils';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { bindActionCreators } from 'redux';
import * as manageUsersActions from '../actions/manageUsersActions';
import '../scss/react-md.scss';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, EditDialogColumn, TablePagination   } from '../components/DataTables'
import Paper from 'react-md/lib/Papers';
import PaginationLoader from './PaginationLoader';
import userManager from '../utils/userManager';
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


class ManageUsersContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      large: false,
      sortedUsers: [],
      userNameSorted: true,
      schoolNameSorted: false,
      yearSorted: null,
      okOnOutsideClick: true,

      fetching: false,
      columns: [],
      data: [],
      start: 0,
      rowsPerPage: 10,
      controlsMarginLeft: 0
    };

    this._load = this._load.bind(this);
    this._handlePagination = this._handlePagination.bind(this);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this)
  }

  handleOutsideClickChange = () => {
    this.setState({ okOnOutsideClick: !this.state.okOnOutsideClick });
  };

  _load() {
    fetch('http://audockerintstg01.epenau.local:12200/api/v1/User/Search')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json, fetching: false, sortedUsers: json  });
      });
    this.setState({ fetching: true });
  }

  _handlePagination(start, rowsPerPage) {
    this.setState({ start, rowsPerPage });
  }

  componentDidMount() {
  }

  sort = () => {
    const key = typeof this.state.userNameSorted === 'boolean' ? 'userName' : 'centreName';
    const sorted = !this.state[`${key}Sorted`];
    this.setState({
      sortedUsers: sort(this.state.sortedUsers, key, sorted),
      [`${key}Sorted`]: sorted,
    });
  };

  handleSortTypeChange(e, value)  {
    const key = value === 'userName' ? 'centreName' : 'userName';
    this.setState({
      [`${key}Sorted`]: null,
      [`${value}Sorted`]: true,
      sortedUsers: sort(this.state.sortedUsers, value, true),
    });
  };

  handleDialogSizeChange = () => {
    this.setState({ large: !this.state.large });
  };

  _formattedColumn = (value) => {
    return value;
  };
e
  handleOutsideClickChange = () => {
    this.setState({ okOnOutsideClick: !this.state.okOnOutsideClick });
  };

  render() {

    const {  sortedUsers, userNameSorted, centreNameSorted, fetching, data, start, rowsPerPage } = this.state;

    let columns = [
      { fieldName: "userName" },
      { fieldName: "centreName" }, 
      { fieldName: "sectors" }, 
      { fieldName: "role" },
    ]
    const rows = sortedUsers.slice(start, start + rowsPerPage).map((datum, i) => (
        <TableRow key={i}>
        {columns.map(({fieldName}) => (
          <TableColumn key={fieldName}>
            { datum[fieldName]}
          </TableColumn>
        ))}
        </TableRow>
    ));

    return (
    <div>
      <Paper zDepth={2} className="user-search-page"> 
        <Box className="users-header">
        <Heading tag="h2"> <span className="sd_hColor">Manage Users</span></Heading>
        </Box>
        <Box className="userse">

        <Box row="direction" className="first-row">
         
            <p className="md-title">Filters</p>
            <div>    
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleSortTypeChange} >
                <RadioButton
                  value="userName"
                  label="Sort by user name"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="centreName"
                  label="Sort by school"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
            </div>
         </Box>  

         <Box  className="second-row">

         </Box>     
            <PaginationLoader fetching={fetching} loaded={!!sortedUsers.length} onLoad={this._load} className="data">
              <DataTable className="pagination-table">
                <TableHeader>
                  <TableRow>
                      <TableColumn 
                         tooltipLabel="username" key="role">User Name
                        sorted={userNameSorted}
                        onClick={typeof userNameSorted === 'boolean' ? this.sort : null}>
                      </TableColumn>
                      <TableColumn 
                         tooltipLabel="schoolname" key="role">School Nmae
                        sorted={centreNameSorted}
                        onClick={typeof centreNameSorted === 'boolean' ? this.sort : null}>
                      </TableColumn>
                      <TableColumn 
                        tooltipLabel="username" key="sectors">Sectors
                      </TableColumn>
                      <TableColumn 
                        tooltipLabel="username" key="role">Role
                      </TableColumn>

                  </TableRow>
                </TableHeader>

                <TableBody>
                  {rows}
                </TableBody>
                <TablePagination onPagination={this._handlePagination} rows={data.length} />
              </DataTable>
            </PaginationLoader>
          </Box>
        </Paper>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(manageUsersActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
    return {     
    };
}

ManageUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ManageUsersContainer)

export default ManageUsersContainer