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

  debugger;

    return (
          <div className="school-heading">
            <Header className="school-name"> St. Paul's Anglican Grammar School </Header>
            <Header size="small" className="school-code"> School Code: 01678 </Header>
          </div>
      )
}

export default SchoolName;
