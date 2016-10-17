import React from 'react';
import ListItem from '../components/common/ListItem';
import Spinning from '../components/common/icons/Spinning';

const BusyListItem = props => (
  <ListItem justify="start" pad="medium">
    <Spinning />
  </ListItem>
);

export default BusyListItem;
