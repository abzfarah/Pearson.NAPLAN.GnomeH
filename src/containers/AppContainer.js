import React from 'react';
import Footer from '../containers/Footer';
import userManager from '../components/utils/oidc/userManager';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import { StickyContainer, Sticky } from '../components/common/Sticky';


//import SchoolSearch from '../components/layouts/SchoolSearch';
import SchoolSearchContainer from './SchoolSearchContainer';

import Header from 'grommet/components/Header';
import { push } from 'react-router-redux';
import HeaderContainer from './HeaderContainer'
import _ from 'lodash';



import  SchoolName  from '../components/SchoolName';

import auth from '../routes/utils/auth'

import { connect } from 'react-redux';


class AppContainer extends React.Component {

  constructor(props) {
      super(props);
      var isloggedIn = auth.loggedIn()

      var retrieveClaims = sessionStorage.getItem("userSession");
      this.sessionClaims = JSON.parse(retrieveClaims);

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

  }

  componentDidMount(props, state) {


  }

  componentWillMount(props) {
    var isloggedIn = auth.loggedIn()
    debugger;


    auth.onChange = this.updateAuth

  }


  render() {

    const { loggedIn, claims }  = this.props;




    return (


    <div className="mainContainer">

      <StickyContainer>
          <Sticky style={{ zIndex: 5 }}>
           <div className="header-bar"><i></i> </div>

            <HeaderContainer loggedIn={loggedIn} claims={claims}
            onLogout={this.onLogoutButtonClick}
            onLogin={this.onLoginButtonClick}
            />

          {loggedIn}<Box direction="row"  wrap={true} align="center" className="second-header">

            <SchoolName />



            <ul className="menu"></ul>
            <SchoolSearchContainer />
          </Box>


        </Sticky>

    </StickyContainer>
    { this.props.children }
    <Footer fixed="true"></Footer>
  </div>
  )
}
}

  //{ <SchoolSearch/> }


function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        error: state.error.error,
        ownProps: ownProps,
        loggedIn: state.session.loggedIn,
        claims: state.session.claims,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
