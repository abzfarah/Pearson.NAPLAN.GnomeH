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
              active={orderBy === 'name'}
              direction={order}
              onClick={this.createSortHandler('name')}
            >
              Dessert (100g serving)
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'calories'}
              direction={order}
              onClick={this.createSortHandler('calories')}
            >
              Calories
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'fat'}
              direction={order}
              onClick={this.createSortHandler('fat')}
            >
              Fat (g)
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'carbs'}
              direction={order}
              onClick={this.createSortHandler('carbs')}
            >
              Carbs (g)
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'protein'}
              direction={order}
              onClick={this.createSortHandler('protein')}
            >
              Protein (g)
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
}