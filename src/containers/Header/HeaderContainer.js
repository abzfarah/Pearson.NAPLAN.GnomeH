import React from 'react'
import { connect } from 'react-redux'
import * as routeActions from 'react-router-redux'
import { Box } from '../../components/common'
import { StickyContainer, Sticky } from '../../components/common/Sticky'
import { bindActionCreators } from 'redux'
import LoginMenu from './components/LoginMenu'
import SchoolSearch from '../../components/SchoolSearch'
import SchoolName from './components/SchoolName'
import Paper from 'material-ui/Paper'
import Header from '../../components/common/Header'
import MenuItem from '../../components/common/Menu/MenuItem'
import NavigationMenu from './components/NavigationMenu'
import Search from './components/Search'
import IconButton from '../../components/common/IconButton'
import ActionSearch from '../../components/common/svg-icons/action/search'



const style = {
  paper: {
    margin: 'auto',
    width: '80%',
    backgroundColor: 'rgb(200, 197, 197)'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px'
  },

  list: {
    display: 'flex',
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingLeft: '3px',
    paddingRight: '3px',
    marginTop: '7px',
    color: 'white'
  },

  menu: {
    backgroundColor: 'rgb(222, 222, 222)'
  }
}

class HeaderContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      openSearch: false
    }

    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  static contextTypes = {
    loggedIn: React.PropTypes.bool,
    user: React.PropTypes.object,
    claims: React.PropTypes.array,
    currentSchool: React.PropTypes.object
  };

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
    const { loggedIn, currentSchool, claims } = this.props
    const { centreSearch } = claims



    return (
      <div>

        <Header splash={false}
          float={false}
          fixed={false}
          size="xlarge">
          <LoginMenu status={this.props} />
        </Header>

     { centreSearch &&  <Header splash={false}
          float={false}
          fixed={false}
          size="xlarge">
          <Search currentSchool={this.props.currentSchool} openSearch={this.state.openSearch} handleSearchClick={this.handleSearchClick}/>
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


function mapDispatchToProps (dispatch) {
  return {
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer)
