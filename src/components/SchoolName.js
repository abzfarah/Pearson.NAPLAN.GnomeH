import React, { Component } from 'react';

import Anchor from '../components/common/Anchor';
import Paragraph from '../components/common/Paragraph';
import Box from '../components/common/Box';
import Columns from '../components/common/Columns';
import Footer from '../components/common/Footer';
import Menu from '../components/common/Menu';
import Label from '../components/common/Label';
import classnames from 'classnames';
import Header from 'grommet/components/Header';


class SchoolName extends React.Component {




  render() {
    const { schoolName, schoolCode } = this.props;
    let string = 'School Code: ';
    var full;
    if (schoolCode != undefined) {
         full = string + schoolCode;
    }
    else full = ""

    return (
      <div className="school-heading">
          <Header className="school-name">
            { schoolName}
          </Header>

          <Header size="small" className="school-code">
            {full}
          </Header>
      </div>
        )
    }
  }

export default SchoolName;
