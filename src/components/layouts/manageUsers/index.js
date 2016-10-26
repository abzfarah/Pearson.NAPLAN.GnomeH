import React, { PropTypes } from 'react';
import Anchor from '../../common/Anchor';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Box from '../../common/Box';
import Button from '../../common/Button';
import Menu from '../../common/Menu';
import Paragraph from '../../common/Paragraph';
import Carousel from '../../common/Carousel';
import Section from '../../common/Section';

import CSSClassnames from '../../utils/CSSClassnames';



class manageUsers extends React.Component {


  render() {
    return (
        <div>


        <Box className="mid">
          <Section>
            <div>
              <h3>Welcome to the VIC Registration Website</h3>
              <h2>This is a demo public page</h2>
              <p>Please log in to continue</p>
              <button >Login</button>
            </div>
          </Section>

        </Box>
      </div>
    );
  }
}



export default manageUsers;
