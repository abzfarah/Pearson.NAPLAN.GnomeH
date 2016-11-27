// @flow weak

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';

import CSSClassnames from '../common/utils/CSSClassnames';
const CLASS_ROOT = CSSClassnames.TABLE;

const TABLE_ROW    = `${CLASS_ROOT}-row`;
const TABLE_HEADER = `${CLASS_ROOT}-header`;
const TABLE_BODY   = `${CLASS_ROOT}-body`;


/**
 * A material table head.
 *
 * ```jsx
 * <TableHead>
 *   <TableRow>....</TableRow>
 * </TableHead>
 * ```
 */
export default class TableHead extends Component {
  static propTypes = {
    /**
     * Should be valid `<thead>` children such as `TableRow`.
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
  };

  static contextTypes = {
    table: PropTypes.object

  };

  static childContextTypes = { table: PropTypes.object };

  getChildContext() { // eslint-disable-line class-methods-use-this
    return {
      table: {
        head: true,
      },
    };
  }

  render() {
    const {
      children,
      ...other
    } = this.props;

    const tableHead = classnames(
      `${TABLE_ROW}`
    );


    return (
      <thead  className={tableHead} {...other}>
        {children}
      </thead>
    );
  }
}
