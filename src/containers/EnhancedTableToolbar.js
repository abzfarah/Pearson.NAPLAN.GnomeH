import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar';
import IconButton from './IconButton';
import Text from './Text'

import classnames from 'classnames';


import CSSClassnames from '../components/common/utils/CSSClassnames';
const CLASS_ROOT = CSSClassnames.TABLE;

const TABLE_TOOLBAR    = `${CLASS_ROOT}-toolbar`;
const TOOLBAR_HIGHLIGHT    = `${CLASS_ROOT}-toolbar--highlight`;
const TOOLBAR_ROOT    = `${CLASS_ROOT}-toolbar--root`;


export default class EnhancedTableToolbar extends React.Component {

  render() {
    const { numSelected } = this.props;
    let classes = TOOLBAR_ROOT;

    if (numSelected > 0) {
        classes += ` ${TOOLBAR_HIGHLIGHT}`;
    }

    return (
    <Toolbar className={classes}>
      <div className="grommetux-table-toolbar--title">
        {numSelected > 0 ? (
          <Text type="subheading">{numSelected} selected</Text>
        ) : (
          <Text type="title">Users</Text>
        )}
      </div>
      <div className="grommetux-table-toolbar--spacer"  />
      <div className="grommetux-table-toolbar--actions">
        {numSelected > 0 ? (
          <IconButton>lock</IconButton>
        ) : (
          <IconButton>filter_list</IconButton>
        )}
      </div>
    </Toolbar>
    );
  }
}