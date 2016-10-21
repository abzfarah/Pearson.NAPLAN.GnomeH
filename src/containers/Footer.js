// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';

import Anchor from '../components/common/Anchor';
import Paragraph from '../components/common/Paragraph';
import Box from '../components/common/Box';
import Columns from '../components/common/Columns';
import Footer from '../components/common/Footer';
import Menu from '../components/common/Menu';
import classnames from 'classnames';



export default class BlogFooter extends Component {
  render () {

    return (
      <Footer size='small' appCentered={true} colorIndex='grey-4'
        direction='row' primary={true} justify='center'
        pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}} className="footy" wrap={true}>
        <Box  direction="row"  className="footerContainer"  wrap={true} align="center" >
          <Box direction="row"className="numberOne">

            <Columns className="logo_1" className="flexy1" align="center">
            <div class="under"><img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com"/></div>
            </Columns>

            <Box direction="row" className="footer-grid" className="flexy2" >

              <Columns>
              <div className="item">
                <h6>VCAA NAPLAN Help
                desk</h6>
              </div>
                <div className="item"><a href="https://auth0.com/pricing">Freecall 1800 658 637</a></div>
                <div className="item"><a href="https://auth0.com/why-auth0">vcaa.naplan.help@edumail.vic.gov.au</a></div>
              </Columns>

              <Columns>
              <div className="item">
                <h6>Privacy</h6>
              </div>
                <div className="item"><a href="https://auth0.com/about">The VCAA is commited to the protection of student information generated by the NAPLAN 2016.
                All personal information collected during NAPLAN is used in accordance with the Privacy and Data Protection Act 2014.</a>
                </div>

              </Columns>

            </Box>

            </Box>

        <Box direction="row" className="colopon" className="flexy3" >

            <div className="column flexy4">

            </div>
            <ul className="column list-inline flexy5" >

              <li className="listy"><a href="https://auth0.com/privacy">Privacy Policy</a></li>
              <li className="listy"><a href="https://auth0.com/terms">Terms of Service</a></li>
              <li className="listy"><span>© 2013-2016 VCAA®. All Rights Reserved.</span></li>
            </ul>


        </Box>
        </Box>


      </Footer>
    );
  }
}
