// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';

import Anchor from '../components/Anchor';
import Paragraph from '../components/Paragraph';
import Box from '../components/Box';
import Columns from '../components/Columns';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import classnames from 'classnames';



export default class BlogFooter extends Component {
  render () {

    return (
      <Footer size='small' appCentered={true} colorIndex='light-2'
        direction='column' primary={true} justify='between'
        pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}}>

        <Box>
        <Columns>
          <Paragraph>This work is licensed under the Creative Commons Attribution 4.0 International License.</Paragraph>
          <Paragraph>You all can suck my motherfucking dick you sons of bitches. Go to hell. All of you.</Paragraph>
        </Columns>
        </Box>



      </Footer>
    );
  }
}
