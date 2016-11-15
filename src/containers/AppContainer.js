import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Box, Button, Header } from '../components/common';
import * as schoolActions from '../actions'
import { loadSchools } from '../actions/searchActions'
import { getClaims } from '../components/utils/getClaims'
import Footer from '../containers/Footer';
import HeaderContainer from './HeaderContainer'
import NavContainer from './NavContainer'
import userManager from '../utils/userManager';
import session from '../routes/utils/session'
import schools from '../data/schools.json';
import _ from 'lodash';
import injectTapEventPlugin from 'react-tap-event-plugin';

const school = schools

const lookup = {};
for (var i = 0, len = school.length; i < len; i++) {
    lookup[school[i].centreCode] = school[i];
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: false,
      claims: false,
      currentSchool: {},
      schools: schools
   }
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

   onLoginButtonClick = (event) => {
      event.preventDefault();
      userManager.signinRedirect();
  };

    onLogoutButtonClick = (event, dispatch) => {
      event.preventDefault();
      sessionStorage.clear();
      localStorage.clear();
      userManager.removeUser();
      userManager.signoutRedirect();
      this.setState({loggedIn: false});
      this.forceUpdate()
  }

  componentWillMount(props) {
    const { dispatch } = this.props;
    if (session.exists) {
      let user_claims = getClaims(session.user)
      this.props.actions.retrieveClaims(user_claims)

      if (user_claims["schoolCode"]) {
        this.props.actions.selectSchool({
            code: lookup[user_claims["schoolCode"].toString()].centreCode,
            name: lookup[user_claims["schoolCode"].toString()].centreName
        })
      }

      this.setState({
        loggedIn: true,
        user: session.user,
        claims: user_claims
      })
    }
  }

  componentDidMount() {

    var d =5;

    debugger;
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (!_.isEqual(this.state.currentSchool, nextProps.currentSchool)) {

        this.setState({currentSchool: nextProps.currentSchool})
    }

    if (this.props.user != nextProps.user) {

        this.setState({user: nextProps.user})
    }

    if (nextProps.user && !this.state.claims) {
        let user_claims = getClaims(nextProps.user.profile)
        this.setState({claims: user_claims})
    }

    else return false
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( !this.props.user && nextProps.user) return true
    if ( this.props.currentSchool != nextProps.currentSchool) return true
    if ( !this.state.loggedIn && nextState.loggedIn ) return true
    else return true
  }

  componentWillUpdate(props, state) {
    if (!this.state.loggedIn && session.exists) {
        const user = session.user
        session.login = true;
        this.setState({loggedIn: true, user: user})
    }
  }

  componentDidMount(props, state) {

    var x =3;

  }

  render() {
    const { schools, currentSchool, claims } = this.state;
    let loggedIn = (this.props.user || this.state.loggedIn) ? true : false;
    let user = (this.props.user || this.state.user);
    let that = this;

    var children = React.Children.map(this.props.children, function (child) {
         return React.cloneElement(child, {
             claims: that.state.claims,
             currentSchool: currentSchool
    })
  })

    return (
      <div>
        <HeaderContainer
           loggedIn={loggedIn}
           user={user}
           claims={claims}
           schools={schools}
           currentSchool={currentSchool}
           onLogout={this.onLogoutButtonClick}
           onLogin={this.onLoginButtonClick} />

        {loggedIn && <NavContainer claims={claims}/>}
      
         { children }     
       
      <Footer/>
    </div>
     )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        loggedIn: state.loggedIn,
        claims: state.claims.claims,
        currentSchool: state.currentSchool.currentSchool
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(schoolActions, dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
