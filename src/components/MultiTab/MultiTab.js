import React, { Component, PropTypes } from 'react';
import Tab from '../common/Tab'
import Tabs from '../common/Tabs'

import StatementContainer from './StatementContainer'
import SchoolDetails from './SchoolDetails'
import AuthorizedStaff from './AuthorizedStaff'
import ActiveTestOrder from './ActiveTestOrder'
import StudentRegistration from './StudentRegistration'
//--TODO _TEMPRORY
import SchoolList  from '../layouts/ManageSchools'
import SchoolModal  from '../layouts/ManageSchools/SchoolModal'
import AddSchool  from '../layouts/ManageSchools/AddSchoolContainer'
import UpdateSchool  from '../layouts/ManageSchools/UpdateSchoolContainer'
import Home from './Home'

const steps =
[
  {name: 'Home', component: <Home />},
  {name: 'Statement', component: <StatementContainer />},
  {name: 'AuthorizedStaff', component: <AuthorizedStaff />},
  {name: 'School details', component: <SchoolDetails />},
//  {name: 'Test Format Order', component: <ActiveTestOrder />},
//  {name: 'Student Registration', component: <StudentRegistration />}
  {name: 'AddSchool', component: <AddSchool />},
    {name: 'UpdateSchool', component: <UpdateSchool />},
  {name: 'SchoolModal', component: <SchoolModal />},
  
 {name: 'SchoolList', component: <SchoolList />}
]


//  <Tabs initialIndex={1} justify="start" className="tablisty" steps={steps} />

const MultiTab = () => (
  <Tabs initialIndex={1} justify="start" className="tablisty sd_testBgColor">

     <Tab title="Home" subtitle="" className="home" inner={steps[0].component}/>
     <Tab title="Statement of Compliance" subtitle="required" className="check" inner={steps[1].component}/>
     <Tab title="Authorised Staff" subtitle="required" className="staff" inner={steps[2].component}/>
     <Tab title="School Details" subtitle="required" className="sd_testBgColor" inner={steps[3].component}/>
     <Tab title="Test Format Order" subtitle="optional" className="staff" inner={steps[4].component}/>
     <Tab title="Student Registration Data" subtitle="independant schools only" className="staff" inner={steps[5].component}/>

  </Tabs>
)

export default MultiTab
