import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as searchSchoolActions from '../actions/schoolSearchActions'
import * as registrationActions from '../actions/registrationActions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Footer from '../containers/Footer';
import HeaderContainer from './HeaderContainer'
import NavContainer from './NavContainer'
import userManager from '../utils/userManager';
import session from '../utils/session'


injectTapEventPlugin();

class AppContainer extends React.Component {

    /**
   * constructor
   * 
   * @param {object} props
   */

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      isAdmin: false,
      user: {},
      claims: {},
      currentSchool: {}
   }
    this.onLoginButtonClick  = this.onLoginButtonClick.bind(this);
    this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
  }

  /**
   * handle login click
   * 
   * @param {SytheticEvent} e
   */

   onLoginButtonClick = (e) => {
      e.preventDefault();
      userManager.signinRedirect();
  };

    /**
   * Handle logout click
   * 
   * @param {SytheticEvent} e
   */

    onLogoutButtonClick = (e) => {
      e.preventDefault();
      sessionStorage.clear();
      localStorage.clear();
      userManager.removeUser();
      userManager.signoutRedirect();
  }

  /**
 * componentWillMount is used to initialise the currentSchool state when an existing 
 * session is found in sessionStorage. Only useful during refresh.
 * 
 * An admin user is not associated with any school, so no school data will be found in session storage.
 * In either case, initialise login status and claims [claims, loggedIn] if session is found.
 * 
 * TODO: Maybe we can manually store a session everytime an admin selects a school, so that the same school
 * can be reloaded if the page is refreshed. Although this will mean extra work as we have to manage the session
 * everytime an admin selects a different school.
 
 * 
 * @param {object} props
 */

  componentWillMount(props) {
    if (session.exists) {
      let user_claims = session.claims
    
      if (!session.isAdmin) {
        let centreCode = session.schoolcode 
        debugger
        let ee = this.props.searchActions.selectSchool(centreCode)
        this.props.registrationActions.fetchStatement(centreCode)
        this.props.registrationActions.fetchSchoolDetails(centreCode)
        this.props.registrationActions.fetchRegistrationStatus(centreCode)
        }
        this.setState({ claims: user_claims,  loggedIn: true})   
    }

      
 }
  

  componentWillReceiveProps(nextProps, nextState) {
    if (!_.isEqual(this.state.currentSchool, nextProps.currentSchool)) {
        this.setState({currentSchool: nextProps.currentSchool})
    } 

    // Create session only if it doesn't exist. 
    // If it exists, session will be created during componentWillMount
    if (nextProps.user && !this.state.loggedIn) {

      let user_claims = {}
      session.loggedIn = true
      user_claims = session.claims

      // if user is not an admin, user will be determined to be a school user
      if (!session.isAdmin) { 
        let schoolcode = session._schoolcode 
        debugger
        this.props.actions.selectSchool(schoolcode)
      }

      this.setState({ 
        claims: user_claims, 
        isAdmin: session.isAdmin,
        loggedIn: true
      })
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (!this.props.user && !nextProps.user) return false
    if (_.isEmpty(this.state.currentSchool) && _.isEmpty(nextProps.currentSchool) && !session.isAdmin) return false
    else return true
  }

  componentWillUpdate(props, state) {
    var y =3;

  }

  componentDidMount() {
    var x =3;
  }

  render() {
    const { loggedIn, claims, currentSchool } = this.state;
    const { router } = this.props
    const isAdmin = this.state.isAdmin || session.isAdmin

    //Attach props [ claims, currentSchool, isAdmin ] to all child components of AppContainer
    let children = React.Children.map(this.props.children, child => {
         return React.cloneElement(child, {
             claims: claims,
             router: router, 
             currentSchool: currentSchool,
             isAdmin: isAdmin
    })
  })

    return (
      <div>
        <HeaderContainer
           loggedIn     = { loggedIn }
           claims       = { claims }
           isAdmin      = { isAdmin }
           currentSchool= { currentSchool }
           onLogout     = { this.onLogoutButtonClick }
           onLogin      = { this.onLoginButtonClick } />
      
         { children }     
       
      <Footer/>
    </div>
     )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        currentSchool: state.school.currentSchool,
        route: ownProps.router
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
       searchActions: bindActionCreators(searchSchoolActions, dispatch),
       registrationActions: bindActionCreators(registrationActions, dispatch),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
