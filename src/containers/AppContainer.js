import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as searchSchoolActions from '../actions/schoolSearchActions'
import * as registrationActions from '../actions/registrationActions'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Footer from './Footer'
import HeaderContainer from './Header/HeaderContainer'
import userManager from '../utils/userManager'
import session from '../utils/session'
import LandingPage from '../layouts/LandingPage'
import App from '../components/common/App'
import _ from 'lodash'
injectTapEventPlugin()

class AppContainer extends React.Component {
  static propTypes = {

  }

  getChildContext () {
    return {
      loggedIn: this.state.loggedIn,
      user: this.state.user,
      claims: this.state.claims,
      currentSchool: this.state.currentSchool
    }
  }

    /**
   * constructor
   *
   * @param {object} props
   */

  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false,
      isAdmin: false,
      user: {},
      claims: {},
      currentSchool: {}
    }
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this)
    this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this)
  }

  /**
   * Handle login click
   *
   * @param {SytheticEvent} e
   */

  onLoginButtonClick = (e) => {
    e.preventDefault()
    userManager.signinRedirect()
  };

    /**
   * Handle logout click
   *
   * @param {SytheticEvent} e
   */

  onLogoutButtonClick = (e) => {
    e.preventDefault()
    window.sessionStorage.clear()
    localStorage.clear()
    userManager.removeUser()
    userManager.signoutRedirect()
  }

  /**
 * componentWillMount is used to initialise the currentSchool state when an existing
 * session is found in window.sessionStorage. Only useful during refresh.
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

  componentWillMount (props) {
      
      if (session.exists && session.isAdmin) {
        let userClaims = session.claims
        let centreCode = session.schoolcode
        this.props.searchActions.selectSchool(centreCode)
        this.props.registrationActions.fetchApplication(centreCode)
        this.setState({ claims: userClaims, loggedIn: true })
      }
 
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (!_.isEqual(this.state.currentSchool, nextProps.currentSchool)) {
      this.setState({ currentSchool: nextProps.currentSchool })
    }
    // Create session only if it doesn't exist.
    // If it exists, session will be created during componentWillMount
    if (nextProps.user && !this.state.loggedIn) {
      let userClaims = {}
      session.loggedIn = true
      userClaims = session.claims

      // if user is not an admin, user will be determined to be a school user
      if (!session.isAdmin) {
        let schoolcode = session._schoolcode
        this.props.actions.selectSchool(schoolcode)
      }

      this.setState({
        claims: userClaims,
        isAdmin: session.isAdmin,
        loggedIn: true
      })
    }
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (!this.props.user && !nextProps.user) return false
    if (_.isEmpty(this.state.currentSchool) && _.isEmpty(nextProps.currentSchool) && !session.isAdmin) return false
    else return true
  }

  render () {
    const { loggedIn, claims, currentSchool } = this.state
    const isAdmin = this.state.isAdmin || session.isAdmin

    return (
      <App centered={false}>
        <HeaderContainer
          loggedIn={loggedIn}
          claims={claims}
          isAdmin={isAdmin}
          currentSchool={currentSchool}
          onLogout={this.onLogoutButtonClick}
          onLogin={this.onLoginButtonClick} />

        { !loggedIn && <LandingPage /> }
        { this.props.children }
        <Footer />
      </App>
    )
  }
}

AppContainer.childContextTypes = {
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.object,
  claims: React.PropTypes.object,
  currentSchool: React.PropTypes.object
}

function mapStateToProps (state, ownProps) {
  return {
    user: state.oidc.user,
    currentSchool: state.school.currentSchool,
    route: ownProps.router
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchActions: bindActionCreators(searchSchoolActions, dispatch),
    registrationActions: bindActionCreators(registrationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
