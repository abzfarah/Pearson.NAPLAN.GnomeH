import React, { Component } from 'react'
import { Box, Heading } from '../../components/common'
import TablePagination from '../../components/DataTables/TablePagination'
import EnhancedTableHead from './components/EnhancedTableHead'
import Paper from '../../components/common/Paper'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import EnhancedTableToolbar from './components/EnhancedTableToolbar'
import { blue300 } from 'material-ui/styles/colors'

import {
  Table,
  TableBody,
  TableRow,
  TableCell
} from '../../components/Table'

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}
class ManageUsersContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      order: 'asc',
      orderBy: 'centreName',
      selected: [],
      value: '',
      filteredData: [],

      fetching: false,
      columns: [],
      dataa: [],
      start: 0,
      rowsPerPage: 10,
      controlsMarginLeft: 0,
      data: [],
      totalRows: 20870,
      filterBy: 'Filter by school code',

      mapColumnToString: {
        'userName': 'user ID',
        'centreName': 'school name',
        'sectors': 'sector',
        'status': 'status',
        'role': 'role'
      },

      filterSelected: {
        'User ID': false,
        'School Name': false,
        'Role': false,
        'Sector': false,
        'School Code': true
      }
    }

    this._handlePagination = this._handlePagination.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this.handleRequestDelete = this.handleRequestDelete.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleRequestDelete () {

  }

  handleTouchTap (e) {
    Object.keys(this.state.filterSelected).forEach(v => (this.state.filterSelected[v] = false))
    let filterSelected = this.state.filterSelected
    let filterBy = 'Filter by ' + `${e.target.innerText}`
    filterSelected[e.target.innerText] = true
    this.setState({ filterSelected, filterBy })
  }

  componentWillMount () {
    fetch('http://audockerintstg01.epenau.local:12200/api/v1/User/Search')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json, fetching: false, sortedUsers: json })
      })
    this.setState({ fetching: true })
  }

  _handlePagination (start, rowsPerPage) {
    this.setState({ start, rowsPerPage })
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    const data = _.orderBy(this.state.data, [orderBy], [order])
    this.setState({ data, order, orderBy })
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      return this.setState({ selected: this.state.data.map((n) => n.userName) })
    }
    return this.setState({ selected: [] })
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id)
    }
  }

  handleClick = (event, id) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    this.setState({ selected: newSelected });
  };

  isSelected = (id) => {
    return this.state.selected.indexOf(id) !== -1;
  }

  _handleChange (event) {
    let mapColumns = {
      'User ID': 'userName',
      'School Name': 'centreName',
      'Role': 'role',
      'Sector': 'sectors',
      'School Code': 'centreCode'
    }

    let totalRows
    let value = event.target.value
    let data = this.state.data
    let filteredData = this.state.data
    let filterSelected = this.state.filterSelected
    let selectedFilter = _.keys(filterSelected).filter(k => filterSelected[k])[0]

    switch (selectedFilter) {
      case 'User ID':
        filteredData = data.filter(n => _.startsWith(n.userName, value.toUpperCase()))
        break
      case 'School Name':
        filteredData = data.filter(n => _.startsWith(n.centreName, value.toUpperCase()))
        break
      case 'role':
        filteredData = data.filter(n => _.startsWith(n.role, value))
        break
      case 'sectors':
        filteredData = data.filter(n => _.startsWith(n.sectors, value))
        break
      case 'School Code':
        filteredData = data.filter(n => _.startsWith(n.centreCode, value.toUpperCase()))
        break
    }

    totalRows = filteredData.length
    this.setState({ filteredData, value, totalRows })
  }

  render () {
    let { data, order, orderBy, selected, fetching, columns, start, rowsPerPage, filteredData, value  } = this.state;
    let showFiltered = this.state.value != '' ? true : false 
    data = showFiltered ? filteredData : data

    return (
      <Box className="users-container">
        <Paper zDepth={2} >
          <Heading tag="h2">
            <span className="sd_hColor">Manage Users</span>
          </Heading>
          <Box direction="row" justify="end">
            <div style={styles.wrapper}>
              <Chip ref="code" style={styles.chip}backgroundColor={this.state.filterSelected['School Code'] && blue300}onTouchTap={this.handleTouchTap} >
                <Avatar size={32}>C</Avatar>
                School Code
              </Chip>
              <Chip ref="id" style={styles.chip} backgroundColor={this.state.filterSelected['User ID'] && blue300} onTouchTap={this.handleTouchTap}>
                <Avatar size={32}>I</Avatar>
                User ID
              </Chip>
              <Chip ref="name" style={styles.chip} backgroundColor={this.state.filterSelected['School Name'] && blue300} onTouchTap={this.handleTouchTap}>
                <Avatar size={32}>N</Avatar>
                School Name
              </Chip>
              <Chip ref="role" style={styles.chip} backgroundColor={this.state.filterSelected['Role'] && blue300} onTouchTap={this.handleTouchTap}>
                <Avatar size={32}>R</Avatar>
                Role
              </Chip>
              <Chip ref="sector" style={styles.chip} backgroundColor={this.state.filterSelected['Sector'] && blue300}onTouchTap={this.handleTouchTap} >
                <Avatar size={32}>S</Avatar>
                Sector
              </Chip>
            </div>
          </Box>
          <Box direction="row" justify="end">
            <TextField
              id="text-field-controlled"
              value={this.state.value}
              hintText={this.state.filterBy}
              floatingLabelText="Search"
              onChange={this._handleChange} />
          </Box>
        </Paper>

        <Paper zDepth={2} >
          <EnhancedTableToolbar numSelected={selected.length} />
          <Table>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort} />
            
            <TableBody>
              { data.slice(start, start + rowsPerPage).map((n) => {
                const isSelected = this.isSelected(n.userName)
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
                    <TableCell numeric>{n.status}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TablePagination onPagination={this._handlePagination} rows={this.state.totalRows} />
          </Table>
        </Paper>
      </Box>
    )
  }
}

export default ManageUsersContainer
