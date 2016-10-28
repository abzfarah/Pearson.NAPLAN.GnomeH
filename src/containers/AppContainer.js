import React from 'react';
import { connect } from 'react-redux';
import userManager from '../components/utils/oidc/userManager';
import { StickyContainer, Sticky } from '../components/common/Sticky';

import Footer from '../containers/Footer';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import Header from 'grommet/components/Header';
import { push } from 'react-router-redux';
import HeaderContainer from './HeaderContainer'
import _ from 'lodash';
import  SchoolNameContainer  from './SchoolNameContainer';
import  SchoolSearchContainer  from './SchoolSearchContainer';
import auth from '../routes/utils/auth'

class AppContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        user: false,
        claims: null
      }

      this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  componentWillMount(props) {
    var self = this
    let user = userManager.getUser().then(function(user) {
      if (user.profile) {
        self.props.dispatch({
            type: 'USER_LOGGEDIN',
            loggedIn: true,
            payload: user.profile
        })

        self.state = {
          loggedIn: true,
          user: user,
          claims: user.profile
        }

      }
      return user
    })

  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( nextState.loggedIn == true | nextProps.loggedIn == true) {
      this.state.loggedIn = true
    }

    var nextState = nextState;
    var nextProps = nextProps;
    return true;
  }

  componentWillUpdate(props, state) {
    var d =9;
  }

  componentDidMount(props, state) {
    this.forceUpdate()
  }

  onLoginButtonClick = (event) => {
      event.preventDefault();
      userManager.signinRedirect();
  };

  onLogoutButtonClick = (event) => {
      event.preventDefault();
      userManager.removeUser(); // removes the user data from sessionStorage
      userManager.signoutRedirect();
      this.setState({loggedIn: false});
      this.forceUpdate()
  }

  render() {

    var schoolDetails = this.props.schoolDetails
    var code = schoolDetails.code;
    var suburb = schoolDetails.suburb;
    var schoolName = schoolDetails.schoolName;

    let adminClaim = _.includes(this.state.claims, 'VIC_Client');

    debugger;
    let loggedIn = this.state.loggedIn;

    return (

    <div className="mainContainer">

      <StickyContainer>
          <Sticky style={{ zIndex: 5 }}>
           <div className="header-bar"><i></i> </div>

            <HeaderContainer loggedIn={this.state.loggedIn} claims={this.state.claims}
            onLogout={this.onLogoutButtonClick}
            onLogin={this.onLoginButtonClick}
            />

          <Box direction="row"  wrap={true} align="center" className="second-header">

            <SchoolNameContainer schoolName={schoolName} schoolCode={code} claims={this.state.claims}/>
            { adminClaim && <SchoolSearchContainer  claims={this.state.claims}/> }

          </Box>


        </Sticky>

    </StickyContainer>
    { this.props.children }
    <Footer ></Footer>
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
        loggedIn: state.loggedIn,
        schoolDetails: state.schoolDetails
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
