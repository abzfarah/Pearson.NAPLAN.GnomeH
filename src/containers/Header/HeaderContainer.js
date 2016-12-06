import React from 'react'
import { connect } from 'react-redux'
import * as routeActions from 'react-router-redux'
import { bindActionCreators } from 'redux'
import LoginMenu from './components/LoginMenu'
import Header from '../../components/common/Header'
import NavigationMenu from './components/NavigationMenu'
import Search from './components/Search'

export class HeaderContainer extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    actions: React.PropTypes.func,
    searchActions: React.PropTypes.func,
    registrationActions: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      openSearch: false
    }
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.isAdmin) return true
    if (_.isEmpty(this.props.currentSchool) && _.isEmpty(nextProps.currentSchool) && !this.props.isAdmin) return false
    return true
  }

  handleSearchClick () {
    this.setState({ openSearch: !this.state.openSearch })
    this.forceUpdate()
    console.log('you madafaka')
  }


  render (props) {
    const { currentSchool, claims } = this.context
    const { centreSearch } = claims


    return (
      <div>
        <Header splash={false}
          float={false}
          fixed={false}
          size="xlarge">
          <LoginMenu status={this.props} />
        </Header>

        { centreSearch &&
        <Header splash={false}
          float={false}
          fixed={false}
          size="xlarge">
          <Search currentSchool={currentSchool}
            openSearch={this.state.openSearch}
            handleSearchClick={this.handleSearchClick} />
        </Header> }

        { centreSearch &&
        <Header splash={false}
          float={false}
          fixed={false}
          size="xlarge">
          <NavigationMenu routeActions={this.props.routeActions} />
        </Header> }


      </div>
    )
  }
}

HeaderContainer.contextTypes = {
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.object,
  claims: React.PropTypes.object,
  currentSchool: React.PropTypes.object
}


function mapDispatchToProps (dispatch) {
  return {
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer)
