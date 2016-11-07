import React, { Component, PropTypes } from 'react';
import {Box, Tab, Heading , Section, Paragraph, Tabs } from '../common/'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from '../common/Table';
import {orange500, blue500, black} from '../common/utils/materialStyles/colors';

var statusIndex = [0, 0, 1, 2, 2];

class Home extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }
  
  render() {
    return (
    <Box className="form-container">   
      <Section className="tabwidth">
          <Table>
            <TableHeader>
              <TableRow >
                <TableHeaderColumn>Task</TableHeaderColumn>
                <TableHeaderColumn>Requirement</TableHeaderColumn>
                <TableHeaderColumn>Due</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody status={statusIndex}>
              <TableRow>
                <TableRowColumn>Statement of Compliance</TableRowColumn>
                <TableRowColumn>Required for all schools</TableRowColumn>
                <TableRowColumn>Friday, 26 February 2016</TableRowColumn>
                <TableRowColumn>Complete</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Authorized Staff</TableRowColumn>
                <TableRowColumn>Required for all schools</TableRowColumn>
                <TableRowColumn>Friday, 26 February 2016</TableRowColumn>
                <TableRowColumn>Complete</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>School Details</TableRowColumn>
                <TableRowColumn>Required for all schools</TableRowColumn>
                <TableRowColumn>Friday, 26 February 2016</TableRowColumn>
                <TableRowColumn>Incomplete</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Alternative Test Format Order</TableRowColumn>
                <TableRowColumn>Optional</TableRowColumn>
                <TableRowColumn>Friday, 26 February 2016</TableRowColumn>
                <TableRowColumn>No orders placed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Student Registration Data</TableRowColumn>
                <TableRowColumn>Independant Schools Only</TableRowColumn>
                <TableRowColumn>Friday, 26 February 2016</TableRowColumn>
                <TableRowColumn>Open</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
      </Section>
   </Box>    
    )
  }
}

export default Home
