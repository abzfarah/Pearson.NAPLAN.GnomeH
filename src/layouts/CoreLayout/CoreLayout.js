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
    <Header fixed={true} direction="row" tag="header">
    <div>
      <nav   className="main-nav" >
          <a href="http://imgur.com/OlNC7UY"><img  id="menuLogo"  src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />

          </a>

          <ul className="menu">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Domain</a></li>
            <li><a href="#">Hosting</a></li>
          </ul>


          <div className="button-groups">
              <Button label="Help" secondary={true} />
              <Button label="Log Out" primary={true} />
          </div>

       </nav>

    </Header>

    <Footer> </Footer>
    </div>
)


export default CoreLayout
