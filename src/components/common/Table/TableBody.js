// @flow weak

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';

export const styleSheet = createStyleSheet('TableBody', (theme) => {
  return {
    root: {
      fontSize: 13,
      color: 'yellow',
    },
  };
});


import CSSClassnames from '../utils/CSSClassnames';
const CLASS_ROOT = CSSClassnames.TABLE;

const TABLE_ROW    = `${CLASS_ROOT}-row`;
const TABLE_HEAD = `${TABLE_ROW}-header`;
const TABLE_BODY   = `${TABLE_ROW}-body`;
const TABLE_FOOTER   = `${TABLE_ROW}-footer`;


/**
 * A material table body.
 *
 * ```jsx
 * <TableBody>
 *   <TableRow>....</TableRow>
 * </TableBody>
 * ```
 */
export default class TableBody extends Component {
  static propTypes = {
    /**
     * Should be valid `<tbody>` children such as `TableRow`.
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
        body: true,
      },
    };
  }

  render() {
    const {
      className: classNameProp,
      children,
      ...other
    } = this.props;


    const classes = classnames(TABLE_BODY, classNameProp);


    return (
      <tbody  className={classes} {...other}>
        {children}
      </tbody>
    );
  }
}
