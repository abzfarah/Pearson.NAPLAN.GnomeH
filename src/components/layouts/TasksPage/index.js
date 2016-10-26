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



class TasksPage extends React.Component {

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
              <h3>Tasks Page</h3>

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

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
