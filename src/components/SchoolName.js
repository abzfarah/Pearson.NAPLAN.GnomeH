import React, { Component } from 'react';

import Anchor from './common/Anchor';
import Paragraph from './common/Paragraph';
import Box from './common/Box';
import Columns from './common/Columns';
import Footer from './common/Footer';
import Menu from './common/Menu';
import classnames from 'classnames';
import Header from 'grommet/components/Header';


const  SchoolName = ({schoolName, schoolCode}) => {

  let code = schoolCode;
  let name = schoolName;
  let string = 'School Code: '

  let full = string + code;

  debugger;

    return (
          <div className="school-heading">
            <Header className="school-name"> {schoolName} </Header>
            <Header size="small" className="school-code">  {schoolCode && full }   </Header>
          </div>
      )
}

export default SchoolName;
