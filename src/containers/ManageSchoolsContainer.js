import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Section} from '../components/common';
import userManager from '../utils/userManager';


const ManageSchoolsContainer = () => (

  <Box className="form-container">  
    <Section className="test">
        <h3>Manage Schools</h3>
    </Section>
  </Box>
  
)

export default ManageSchoolsContainer
