// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';


import CSSClassnames from '../common/utils/CSSClassnames';
const CLASS_ROOT = CSSClassnames.TABLE;

const TABLE_ROW    = `${CLASS_ROOT}-row`;
const TABLE_HEAD = `${TABLE_ROW}-header`;
const TABLE_BODY   = `${TABLE_ROW}-body`;
const TABLE_FOOTER   = `${TABLE_ROW}-footer`;


export const styleSheet = createStyleSheet('TableRow', (theme) => {
  return {
    root: {
      height: 48,
      '&:focus': {
        outline: 'none',
        background: 'white',
      },
    },
    head: {
      height: 64,
    },
    footer: {
      height: 56,
    },
    hover: {
      '&:hover': {
        background: 'green',
      },
    },
    selected: {
      background: 'yellow',
    },
  };
});

/**
 * A material table row.
 *
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc)
 *
 * ```jsx
 * <TableRow>
 *   <TableCell>....</TableCell>
 * </TableRow>
 * ```
 */
export default function TableRow(props, context) {
  const {
    className: classNameProp,
    children,
    hover,
    selected,
    ...other
  } = props;
  const { table } = context;

const classes = classnames(TABLE_ROW, {

    [`${TABLE_ROW}--header`]: table && table.head,
    [`${TABLE_ROW}--footer`]: table && table.footer,
    [`${TABLE_ROW}--selected`]: table && selected,

  }, classNameProp);




  return (
    <tr  className={classes} {...other}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: PropTypes.node,
  /**
   * The CSS class name of the root element.
   */

  /**
   * If set to true, the table row will shade on hover.
   */
  hover: PropTypes.bool,
  /**
   * If set to true, the table row will have the selected shading.
   */
  selected: PropTypes.bool,
};

TableRow.defaultProps = {
  hover: false,
  selected: false,
};

TableRow.contextTypes = {
  table: PropTypes.object
};
