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
      <Footer size='small' appCentered={true} colorIndex='light-1'
        direction='row' primary={true} justify='center'
        pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}} className="footy" wrap={true}>
        <Box  direction="row"  className="footerContainer"  wrap={true} align="center" >
          <Box direction="row"className="numberOne">

            <Columns className="logo_1" className="flexy1" align="center">
            <div className="logo"><img src="http://i.imgur.com/1xspNP5.png" width="78"/></div>
            </Columns>

            <Box direction="row" className="footer-grid" className="flexy2" >

              <Columns>
              <div className="item">
                <h6>Company</h6>
                </div>
                <div className="item"><a href="https://auth0.com/pricing">About Us</a></div>
                <div className="item"><a href="https://auth0.com/why-auth0">Why Pearson</a></div>
                <div className="item"><a href="https://auth0.com/how-it-works">How It Works</a></div>
              </Columns>

              <Columns>
              <div className="item">
                <h6>My account</h6>
              </div>
                <div className="item"><a href="https://auth0.com/about">Log in</a></div>
                <div className="item"><a href="https://auth0.com/blog">Sign up</a></div>

              </Columns>

              <Columns>
              <div className="item">
                <h6>Careers</h6>
              </div>
              <div className="item"><a href="https://support.auth0.com">Employment</a></div>
              <div className="item"><a href="https://auth0.com/docs">Professional</a></div>

              </Columns>


              <Columns>
              <div className="item">
                        <h6>Media</h6>
                      </div>
                      <div className="item"><a href="https://auth0.com/lock">Media enqueries</a></div>

              </Columns>

              <Columns size="large" className="outcol">
                    <div className="item">
                      <h6>Contact</h6>
                    </div>
                      <div className="item item-text">Level 1, 2 Lonsdale Street<br/>Suite 700<br/>Melbourne, VIC   3000</div>
              </Columns>
              <Box className="contacts">

                  <div className="no-heading">
                    <div className="item"><a href="tel:+18882352699">+61 (03) 9032 1700</a></div>
                    <div className="item"><a href="tel:+14253126521">+61 (425) 1800 134 197</a></div>
                    <div className="item"><a href="https://support.auth0.com">Support Center</a></div>
                  </div>
              </Box>

            </Box>

            </Box>

        <Box direction="row" className="colopon" className="flexy3" >

            <div className="column flexy4">
            <div className="social">
              <div className="twitter">
                <iframe  scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=VicGovAu" className="twitter"></iframe>
              </div>
              <div className="facebook">
                <iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fgetauth0&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;show_count=false&amp;share=false&amp;height=21&amp;appId=507756515938786" scrolling="no"  className="facebook"></iframe>
              </div>
            </div>
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
