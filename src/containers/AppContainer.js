import React from 'react';
import Footer from '../containers/Footer';
import userManager from '../components/utils/oidc/userManager';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Header from 'grommet/components/Header';
import auth from '../routes/utils/auth'

import { connect } from 'react-redux';


class AppContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        loggedIn: auth.loggedIn(),
      };

      const {store } = this.context;

      var hello = store;

      this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
      this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  onLoginButtonClick = (event) => {
      event.preventDefault();
      userManager.signinRedirect();
  };

  onLogoutButtonClick = (event) => {
      event.preventDefault();
      userManager.removeUser(); // removes the user data from sessionStorage
      userManager.signoutRedirect();

  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  }

  componentWillMount() {
    auth.loggedIn()
    auth.onChange = this.updateAuth

  }


  render() {
    return (
    <div className="mainContainer">

    <StickyContainer>
        <Sticky style={{ zIndex: 5 }}>
            <div className="header-bar"><i></i> </div>
            <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="first-header">
                <div className="under">
                    <a href="http://imgur.com/OlNC7UY"><img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
                </div>
                <ul className="menu"></ul>
                <div className="button-groups">
                {this.state.loggedIn ? (<div>
                    <Button label="Help" secondary={true} />
                    <Button label="Log Out" onClick={this.onLogoutButtonClick} primary={true} />
                    </div>
                    ) : (
                      <div>
                    <Button label="Help" secondary={true} />
                    <Button label="Log In" onClick={this.onLoginButtonClick} primary={true} />
                    </div>
                    )}
                </div>
            </Box>


        </Sticky>
    </StickyContainer>


    { this.props.children }
    <Footer fixed="true"></Footer>
  </div>
  )
}
}




function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        error: state.error.error,
        ownProps: ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
