import React, { Component, PropTypes } from 'react';
import Tab from '../Tab'
import Tabs from '../Tabs'
import Section from '../Section'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from '../Table';
import {orange500, blue500, black} from '../utils/materialStyles/colors';

const Home = () => (


<Section>

<Table>
  <TableHeader>
    <TableRow>
      <TableHeaderColumn>ID</TableHeaderColumn>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Status</TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableRowColumn>1</TableRowColumn>
      <TableRowColumn>John Smith</TableRowColumn>
      <TableRowColumn>Employed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>2</TableRowColumn>
      <TableRowColumn>Randal White</TableRowColumn>
      <TableRowColumn>Unemployed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>3</TableRowColumn>
      <TableRowColumn>Stephanie Sanders</TableRowColumn>
      <TableRowColumn>Employed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>4</TableRowColumn>
      <TableRowColumn>Steve Brown</TableRowColumn>
      <TableRowColumn>Employed</TableRowColumn>
    </TableRow>
  </TableBody>
</Table>


</Section>






)

export default Home
