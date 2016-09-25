import React from 'react'
import Anchor from '../../components/Anchor'
import Header from '../../components/Header'
import Footer from '../../containers/Footer'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import Paragraph from '../../components/Paragraph'
import Carousel from '../../components/Carousel'
import Tab from '../../components/Tab'
import Tabs from '../../components/Tabs'
import MultiTab from '../../components/MultiTab'

import CSSClassnames from '../../components/utils/CSSClassnames';
import '../../styles/core.scss'
const CLASS_ROOT = CSSClassnames.CALENDAR;


export const CoreLayout = () => (
    <div>
    <Header fixed={true} direction="row" tag="header" className="grommetux-box__container">


    <Box  direction="row"  className="footerContainer"  wrap={true} align="center" className="numba1" className="main-nav" >

        <div className="under">
        <a href="http://imgur.com/OlNC7UY"><img  id="menuLogo"  src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
        </div>
        <div className="button-groups">
            <Button label="Help" secondary={true} />
            <Button label="Log Out" primary={true} />
        </div>
        </Box>

       <Box  direction="row" justify="start" className="breadcrumb" className="numba2">
             <ul className="menu">
               <li><a href="#" className="active">Home</a></li>
               <li><a href="#">Tasks</a></li>
               <li><a href="#">Manage Users</a></li>
               <li><a href="#">Manage Schools</a></li>
               <li><a href="#">Reports</a></li>
               <li><a href="#">Help</a></li>
             </ul>

       </Box>

       

        </Header>

        <Box className="mid">       <MultiTab/>   </Box>

   


        <Footer fixed="true"> </Footer>
          </div>
)


export default CoreLayout
