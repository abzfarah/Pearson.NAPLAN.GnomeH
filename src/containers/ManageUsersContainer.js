import React, { Component, PropTypes } from 'react';
import { CardText } from '../components/Cards';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Section, Heading, Paragraph} from '../components/common';
import { connect } from 'react-redux';
import FontIcon from '../components/FontIcons';
import TablePagination from '../components/DataTables/TablePagination';
import { sort } from '../components/utils/ListUtils';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { bindActionCreators } from 'redux';
import EnhancedTableHead from './EnhancedTableHead'
import { createStyleSheet } from 'jss-theme-reactor';
import Paper from '../components/common/Paper';
import PaginationLoader from './PaginationLoader';
import Checkbox from 'material-ui/Checkbox';
import AutoComplete   from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '../components/Table'

class ManageUsersContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'centreName',
      selected: [],
      value: "",
      filteredData: [],

      fetching: false,
      columns: [],
      dataa: [],
      start: 0,
      rowsPerPage: 10,
      controlsMarginLeft: 0,
      data: [],
      totalRows: 20870,
      
    };

    this._handlePagination = this._handlePagination.bind(this);
    this._handleChange     = this._handleChange.bind(this);
  }

  componentWillMount() {
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

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data = this.state.data.sort(
      (a, b) => (
        order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]
      ),
    );

    this.setState({ data, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      return this.setState({ selected: this.state.data.map((n) => n.id) });
    }
    return this.setState({ selected: [] });
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  }

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  isSelected = (id) => {
    return this.state.selected.indexOf(id) !== -1;
  }

  _handleChange(event) {

      let totalRows;

     let value = event.target.value;
     let data = this.state.data;
     let filteredData = this.state.data;



     filteredData = _.filter(data, function (data) {
          return _.startsWith(data.userName, value);
    });

    totalRows = filteredData.length

    this.setState({filteredData, value, totalRows})


     debugger

     
  }

  render() {

    let { data, order, orderBy, selected, fetching, columns, start, rowsPerPage, filteredData, value  } = this.state;


    let showFiltered = this.state.value != "" ? true : false 
    
    data = showFiltered ? filteredData : data


    return (
      <Box className="users-container">
        <Paper zDepth={2} >
          <Heading tag="h2">
            <span className="sd_hColor">Manage Users</span>
          </Heading>
          <TextField
            id="text-field-controlled"
            value={this.state.value}
            onChange={this._handleChange}
         />
        </Paper>  

        <Paper zDepth={2} >
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onSelectAllClick={this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            { data.slice(start, start + rowsPerPage).map((n) => {
              const isSelected = this.isSelected(n.userName);
              return (
                <TableRow
                  hover
                  onClick={(event) => this.handleClick(event, n.userName)}
                  onKeyDown={(event) => this.handleKeyDown(event, n.userName)}
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex="-1"
                  key={n.id}
                  selected={isSelected}
                >
                  <TableCell checkbox>
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  <TableCell padding={false}>{n.userName}</TableCell>
                  <TableCell numeric>{n.centreName}</TableCell>
                  <TableCell numeric>{n.role}</TableCell>
                  <TableCell numeric>{n.sectors}</TableCell>
                  <TableCell numeric>{n.centreCode}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
            <TablePagination onPagination={this._handlePagination} rows={this.state.totalRows} />
        </Table>
        </Paper>
      </Box>
    );
  }
}



export default ManageUsersContainer