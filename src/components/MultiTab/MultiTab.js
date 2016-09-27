import React, { Component, PropTypes } from 'react';
import Tab from '../Tab'
import Tabs from '../Tabs'

import Statement from './Statement'
import SchoolDetails from './SchoolDetails'
import AuthorizedStaff from './AuthorizedStaff'
import Home from './Home'

    const steps =
    [
      {name: 'Home', component: <Home />},
      {name: 'Statement', component: <Statement />},
      {name: 'AuthorizedStaff', component: <AuthorizedStaff />},
      {name: 'School details', component: <SchoolDetails />}

    ]



//  <Tabs initialIndex={1} justify="start" className="tablisty" steps={steps} />

const MultiTab = () => (
  <Tabs initialIndex={0} justify="start" className="tablisty">

     <Tab title="Home" className="home" inner={steps[0].component}/>
     <Tab title="Statement of Compliance" className="check" inner={steps[1].component}/>
     <Tab title="Authorised Staff" className="staff" inner={steps[2].component}/>
     <Tab title="School Details" className="staff" inner={steps[3].component}/>

  </Tabs>
)

export default MultiTab
