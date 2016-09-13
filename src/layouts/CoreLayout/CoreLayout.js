import React from 'react'
import Anchor from '../../components/Anchor'
import Header from '../../components/Header'
import Footer from '../../containers/Footer'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import Paragraph from '../../components/Paragraph'



import CSSClassnames from '../../components/utils/CSSClassnames';
import '../../styles/core.scss'
const CLASS_ROOT = CSSClassnames.CALENDAR;


export const CoreLayout = ({ children }) => (
  <div >
  <Header fixed={true} direction="row">

    <Box  tag="div" direction="row" justify="between"  className="first" >
         <h1 id="menuLogo" className="vcaa-logo">
            <a href="http://imgur.com/OlNC7UY"><img  id="menuLogo"  src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" /></a>
         </h1>

        <Box direction="row">
            <Button label="Help" secondary={true} />
            <Button label="Log Out" primary={true} />
        </Box>

     </Box>

    <Box  tag="div" direction="row"  justify="between" className="second" >
         <Box >
            <div className="head-name">St. Paul's Anglican Grammar School</div>
             <div className="head-code">School Code: 01678</div>
         </Box>

        <Box direction="row">
            <button> Pas School </button>
            <button> School cODE </button>
        </Box>

     </Box>



  </Header>

  </div>
)


export default CoreLayout
