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
      <StickyContainer>
        <Sticky style={{zIndex: 5}}>
          <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="main-nav">
            <div className="under">
              <a href="http://imgur.com/OlNC7UY"><img  id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
            </div>
              <ul className="menu"> </ul>
            <div className="button-groups">
              <Button label="Help" secondary={true} />
              <Button label="Log In" onClick={this.onLoginButtonClick} primary={true} />
            </div>
          </Box>
        </Sticky>
      </StickyContainer>

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
    error: state.error.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicPage);
