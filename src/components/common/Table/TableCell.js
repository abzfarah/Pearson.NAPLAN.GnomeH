// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';


import CSSClassnames from '../utils/CSSClassnames';
const CLASS_ROOT = CSSClassnames.TABLE;

const TABLE_CELL    = `${CLASS_ROOT}-cell`;

export const styleSheet = createStyleSheet('TableCell', (theme) => {
  return {
    root: {
      borderBottom: `1px solid`,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse', // can be dynamically inherited at runtime by contents
    },
    head: {
      whiteSpace: 'pre',
    },
    padding: {
      padding: '0 56px 0 24px',
      '&:last-child': {
        paddingRight: 24,
      },
    },
    compact: {
      paddingRight: 24,
    },
    checkbox: {
      paddingLeft: 12,
      paddingRight: 0,
    },
    footer: {},
  };
});

/**
 * A material table cell.
 *
 * When placed in a `TableHead`, this will automatically render a `th` element.
 *
 * ```jsx
 * <TableCell>Hello</TableCell>
 * ```
 */
export default function TableCell(props, context) {
  const {
    className: classNameProp,  
    children,
    compact,
    checkbox,
    numeric,
    padding,
    ...other
  } = props;
  const { table} = context;


  const Component = table && table.head ? 'th' : 'td';


    const className = classnames(TABLE_CELL, {
    [`${TABLE_CELL}--numeric`]: numeric,
    [`${TABLE_CELL}--compact`]: compact,
    [`${TABLE_CELL}--checkbox`]: checkbox,
    [`${TABLE_CELL}--padding`]: padding,
    [`${TABLE_CELL}--head`]: table && table.head,
    [`${TABLE_CELL}--footer`]: table && table.footer,
  }, classNameProp);


  return (
    <Component className={className}  {...other}>
      {children}
    </Component>
  );
}

TableCell.propTypes = {
  /**
   * If `true`, the cell padding will be adjusted to better accomodate a checkbox.
   */
  checkbox: PropTypes.bool,
  /**
   * The table cell contents.
   */
  children: PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,
  /**
   * If set to true, will use more compact cell padding to accomodate more content.
   */
  compact: PropTypes.bool,
  /**
   * If set to true, will align content to the right hand side.
   */
  numeric: PropTypes.bool,
  /**
   * If set to false, will disable left/right cell padding.
   */
  padding: PropTypes.bool,
};

TableCell.defaultProps = {
  checkbox: false,
  compact: false,
  numeric: false,
  padding: true,
};

TableCell.contextTypes = {
  table: PropTypes.object
};
