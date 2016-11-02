import React from 'react';
import { connect } from 'react-redux';
import userManager from '../utils/userManager';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Footer from '../containers/Footer';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import Header from 'grommet/components/Header';
import { push } from 'react-router-redux';
import HeaderContainer from './HeaderContainer'
import session from '../routes/utils/session'
import schools from '../data/schools.json';
import { loadSchools } from '../actions/searchActions'
import _ from 'lodash';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: false,
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
      let user = session.user
      session.login = true;
      this.setState({loggedIn: true, user: user})
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.currentSchool != nextProps.currentSchool) {
      this.setState({currentSchool: nextProps.currentSchool})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( !this.props.user && nextProps.user) return true
    else if (this.props.currentSchool != nextProps.currentSchool) return true
    else if ( !this.state.loggedIn && nextState.loggedIn ) return true
    else false;
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
    const { user, loggedIn, schools, currentSchool } = this.state
    return (
      <div>
        <HeaderContainer
           loggedIn={this.state.loggedIn}
           user={user}
           schools={schools}
           currentSchool={currentSchool}
           onLogout={this.onLogoutButtonClick}
           onLogin={this.onLoginButtonClick} />

        { this.props.children }

        <Footer/>
      </div>
     )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        loggedIn: state.loggedIn
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
