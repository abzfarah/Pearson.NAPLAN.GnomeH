import React, { Component, PropTypes } from 'react';
import Tab from '../Tab'
import Tabs from '../Tabs'

import Statement from './Statement'
import SchoolDetails from './SchoolDetails'
import AuthorizedStaff from './AuthorizedStaff'




const MultiTab = () => (
  <Tabs initialIndex={1} justify="start" className="tablisty">
     <Tab title="First Title" className="home">

        <Statement/>
     </Tab>
     <Tab title="Second Title" className="check">
        <AuthorizedStaff/>

     </Tab>
     <Tab title="Third Title" className="staff">
        <SchoolDetails/>
     </Tab>
  </Tabs>
)

export default MultiTab
