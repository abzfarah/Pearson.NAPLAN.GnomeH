// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

import ButtonBase from '../ButtonBase';
import classnames from 'classnames';


import CSSClassnames from '../utils/CSSClassnames';
const CLASS_ROOT = CSSClassnames.TABLE;

const TABLE_SORT    = `${CLASS_ROOT}-sort`;
const TABLE_ICON    = `${CLASS_ROOT}-sort--icon`;
const classes = {
    desc: {
      transform: 'rotate(0deg)',
    },
    asc: {
      transform: 'rotate(180deg)',
    },
    icon: {
      fontSize: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: 'opacity,transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms',
      userSelect: 'none',
    }

};

/**
 * A button based label for placing inside `TableCell` for column sorting.
 */
export default function TableSortLabel(props, context) {
  const { active,  className, children, direction, ...other } = props;

  const sortLabelClasses = classnames(TABLE_SORT, {
    [`${TABLE_SORT}--active`]: active,
  }, className);

  var way;

  if (direction =="asc") {
      way = "asc"
  }

  else way = "desc"

  const iconClasses = classnames(TABLE_ICON, {
    [`${TABLE_SORT}--${way}`]: true,
  }, 'material-icons');

  return (
    <ButtonBase
      className={sortLabelClasses}
      component="span"
      ripple={false}
      {...other}
    >
      {children}
      <span className={iconClasses}>arrow_downward</span>
    </ButtonBase>
  );
}

TableSortLabel.propTypes = {
  /**
   * If set to true, will have the active styling (should be true for the sorted column).
   */
  active: PropTypes.bool,
  /**
   * Label contents, the arrow will be appended automatically and aligned using flexbox.
   */
  children: PropTypes.node,
  /**
   * The CSS class name of the root element.
   */

  /**
   * The current sort direction.
   */
  direction: PropTypes.oneOf(['asc', 'desc']),
};

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc',
};

TableSortLabel.contextTypes = {
 
};
