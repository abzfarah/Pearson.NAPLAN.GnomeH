import React from 'react';
import { connect } from 'react-redux';
import userManager from '../components/utils/userManager';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Footer from '../containers/Footer';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import Header from 'grommet/components/Header';
import { push } from 'react-router-redux';
import HeaderContainer from './HeaderContainer'
import NavContainer from './NavContainer'
import session from '../routes/utils/session'
import { getClaims } from '../components/utils/getClaims'
import schools from '../data/schools.json';
import { loadSchools } from '../actions/searchActions'
import _ from 'lodash';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: false,
      claims: false,
      currentSchool: false,
      schools: schools
   }
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

   onLoginButtonClick = (event) => {
      event.preventDefault();
      userManager.signinRedirect();
  };

    onLogoutButtonClick = (event) => {
      event.preventDefault();
      userManager.removeUser();
      sessionStorage.clear();
      userManager.signoutRedirect();
      this.setState({loggedIn: false});
      this.forceUpdate()
  }

  componentWillMount(props) {
    const { dispatch } = this.props;
    if (session.exists) {

      let user_claims = getClaims(session.user)

      this.props.dispatch({
          type: 'RETRIEVE_CLAIMS',
          payload: {
            claims: user_claims
          }
      })


      this.setState({
        loggedIn: true,
        user: session.user,
        claims: user_claims
      })
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.currentSchool != nextProps.currentSchool) {
      this.setState({currentSchool: nextProps.currentSchool})
    }

    if (this.props.user != nextProps.user) {
      this.setState({user: nextProps.user})
    }

    if (nextProps.user && !this.state.claims) {
        let user_claims = getClaims(session.user)
        this.setState({claims: user_claims})


    }

    else return false
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( !this.props.user && nextProps.user) return true
    if (this.props.currentSchool != nextProps.currentSchool) return true
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
  }

  render() {
    const { schools, currentSchool, claims } = this.state;
    let loggedIn = (this.props.user || this.state.loggedIn) ? true : false;
    let user = (this.props.user || this.state.user);

    return (
      <div>
        <HeaderContainer
           loggedIn={loggedIn}
           user={user}
           schools={schools}
           currentSchool={currentSchool}
           onLogout={this.onLogoutButtonClick}
           onLogin={this.onLoginButtonClick} />

        { loggedIn && <NavContainer claims={claims}/> }

        { this.props.children }

        <Footer/>
      </div>
     )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        loggedIn: state.loggedIn,
        claims: state.claims.claims
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
