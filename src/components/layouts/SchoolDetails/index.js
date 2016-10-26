import React, { PropTypes } from 'react';
import Anchor from '../../common/Anchor';
import Header from '../../common/Header';
import Footer from '../../../containers/Footer';
import Box from '../../common/Box';
import Button from '../../common/Button';
import Menu from '../../common/Menu';
import Paragraph from '../../common/Paragraph';
import Carousel from '../../common/Carousel';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';
import MultiTab from '../../MultiTab';
import { StickyContainer, Sticky } from '../../common/Sticky';
import SchoolSearch from '../SchoolSearch';
import SchoolDetailsForm from './SchoolDetailsForm'

// import CSSClassnames from '../../utils/CSSClassnames';
// import '../../../styles/core.scss';
// const CLASS_ROOT = CSSClassnames.CALENDAR;

const SchoolDetailsLayout = ({onLogoutClick, name='Test User'}) => {
  return(
    <div>
      <StickyContainer>
        <Sticky style={{ zIndex: 5 }}>
            <div className="header-bar"><i></i> </div>

            <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="first-header">
                <div className="under">
                    <a href="http://imgur.com/OlNC7UY"><img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
                </div>
                <ul className="menu"></ul>

                <div className="button-groups">
                    <Button label="Help" secondary={true} />
                    <Button label="Log Out" onClick={onLogoutClick} primary={true} />
                </div>
            </Box>

            <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="second-header">
                <div className="school-heading">
                    <Header className="school-name"> St. Paul's Anglican Grammar School </Header>
                    <Header size="small" className="school-code"> School Code: 01678 </Header>
                </div>

                <ul className="menu"></ul>
                <div className="search-box">

                  <SchoolSearch />

                </div>
            </Box>

        </Sticky>

      </StickyContainer>

      <Menu inline={true} direction="row">
          <Anchor href="#" className="active">
              Home
        </Anchor>
          <Anchor href="#">
              Tasks
        </Anchor>
          <Anchor href="#">
              2017 NAPLAN Online Pilot
        </Anchor>
          <Anchor href="#">
              Bulk Download
        </Anchor>
          <Anchor href="#">
              Contact Us
        </Anchor>
          <Anchor href="#">
              Manage Users
        </Anchor>
          <Anchor href="#">
              Reports
        </Anchor>
      </Menu>
    </div>
  );
}


SchoolDetailsLayout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default SchoolDetailsLayout
