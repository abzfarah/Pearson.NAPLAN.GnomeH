import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Section, Tab, Tabs } from '../components/common';
import userManager from '../utils/userManager';


const ManageUsersContainer = () => (

  <Box className="form-container">  
    <Section className="test">
        <h3>Manage Users</h3>
    </Section>
  </Box>
  
)

export default ManageUsersContainer
