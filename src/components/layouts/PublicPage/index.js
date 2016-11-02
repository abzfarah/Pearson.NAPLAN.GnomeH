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
import { StickyContainer, Sticky } from '../../common/Sticky';
import CSSClassnames from '../../utils/CSSClassnames';
import { connect } from 'react-redux';
import userManager from '../../utils/oidc/userManager';
import '../../../styles/core.scss';


class PublicPage extends React.Component {

  onLoginButtonClick = (event) => {
  event.preventDefault();
  userManager.signinRedirect();
};


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


function mapStateToProps(state) {
  return {
    user: state.oidc.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicPage);
