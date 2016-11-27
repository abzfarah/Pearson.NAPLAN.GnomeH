import React, { Component, PropTypes } from 'react';
import { CardText } from '../components/Cards';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Section, Heading, Paragraph} from '../components/common';
import { connect } from 'react-redux';
import FontIcon from '../components/FontIcons';
import { sort } from '../components/utils/ListUtils';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { bindActionCreators } from 'redux';
//import * as manageUsersActions from '../actions/manageUsersActions';
//import '../scss/react-md.scss';
import Toolbar from 'material-ui/Toolbar';


import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { createStyleSheet } from 'jss-theme-reactor';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel
} from '../components/Table'
import Paper from 'react-md/lib/Papers';
import PaginationLoader from './PaginationLoader';


export default class EnhancedTableHead extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.string,
    orderBy: PropTypes.string,
  };

  createSortHandler = (property) => {
    return (event) => this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
           <TableHead>
        <TableRow>
          <TableCell checkbox>
            <Checkbox onChange={this.props.onSelectAllClick} />
          </TableCell>
          <TableCell padding={false}>
            <TableSortLabel
              active={orderBy === 'userName'}
              direction={order}
              onClick={this.createSortHandler('userName')}
            >
              User ID
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'centreName'}
              direction={order}
              onClick={this.createSortHandler('centreName')}
            >
              School Name
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'role'}
              direction={order}
              onClick={this.createSortHandler('role')}
            >
              Role
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'sectors'}
              direction={order}
              onClick={this.createSortHandler('sectors')}
            >
              Sector
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'centreCode'}
              direction={order}
              onClick={this.createSortHandler('centreCode')}
            >
              School Code
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
}