import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Anchor, Box} from '../components/common';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const style = {
  paper: {
    display: 'flex',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },

  list: {
    display: 'flex'
  }
};

class NavContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

   let { claims: {centreSearch}, dispatch } = this.props

    return (
      <Paper >
        <Menu listStyle={style.list} >
          <MenuItem primaryText="Tasks" />
          <MenuItem primaryText="2017 NAPLAN Online Pilot"  />
          <MenuItem primaryText="Bulk Download"  />
          <MenuItem primaryText="Contact Us"/>
          <MenuItem primaryText="Manage Schools" />
          <MenuItem primaryText="Manage Users" />
          <MenuItem primaryText="Reports" />
        </Menu>
      </Paper>
      )
    }
  }


  export default NavContainer;
