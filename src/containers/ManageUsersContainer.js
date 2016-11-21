import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Section} from '../components/common';
import userManager from '../utils/userManager';
import { SmartTable } from './SmartTable'

const tableHeaders = [
  { alias: 'Name', sortable: true, dataAlias: 'name', format: { type: 'link', url: 'http://someurl' } },
  { alias: 'Status', sortable: true, dataAlias: 'status', format: { type: 'status' } },
  { alias: 'Birth Date', sortable: true, dataAlias: 'birth_date', format: { type: 'date' } }]


const data = [
  { name: "John", status: "Single", birth_date: '1 Jan 1966' },
  { name: "David", status: "Married", birth_date: '5 Feb 1914' },
]
const ManageUsersContainer = () => (

  <Box className="form-container">  
        <SmartTable { ...{ tableHeaders, data, limit: 20, total: data.length } } />

  </Box>
  
)

export default ManageUsersContainer