import React, { Component } from 'react';
import { Anchor, Box, Columns, Footer, Menu, Label, Header, Paragraph } from '../components/common';
import classnames from 'classnames';

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
