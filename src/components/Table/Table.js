// @flow weak

import React, { Component, PropTypes } from 'react';
import { createStyleManager } from 'jss-theme-reactor/styleManager';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';

import CSSClassnames from '../common/utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.TABLE;

export const styleSheet = createStyleSheet('Table', () => {
  return {
    root: {
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden',
    },
  };
});

/**
 * A material table root element.
 *
 * ```jsx
 * <Table>
 *   <TableHeader>....</TableHeader>
 *   <TableBody>....</TableBody>
 * </Table>
 * ```
 */
export default class Table extends Component {
  static propTypes = {
    /**
     * Should be valid `<table>` children such as
     * `TableHeader` and `TableBody`.
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
  };

  static contextTypes = {

  };

  static childContextTypes = { table: PropTypes.object };

  getChildContext() { // eslint-disable-line class-methods-use-this
    return {
      table: {},
    };
  }

  componentWillReceiveProps(nextProps, nextState) {

    var x =2;
  }

  render() {
    const {
      className: classNameProp,
      children,
      ...other
    } = this.props;


    const tableClasses = classnames(
      `${CLASS_ROOT}`,
      classNameProp
    );




    return (
      <table  className={tableClasses} {...other}>
        {children}
      </table>
    );
  }
}
