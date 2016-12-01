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

  render (props) {
    const { loggedIn, currentSchool, claims } = this.props
    const { centreSearch } = claims

    return (
      <StickyContainer>
        <Sticky>
          <LoginMenu status={this.props} />
          <Box direction="row" wrap={true} align="center" className="second-header">
            <Box direction="row" className="school-info">
              { loggedIn && <SchoolName school={currentSchool} /> }
            </Box>
            <Box direction="row" className="school-search">
              { centreSearch && <SchoolSearch /> }
            </Box>
          </Box>
       

        { loggedIn && <NavigationMenu routeActions={this.props.routeActions} /> }
 </Sticky>
      </StickyContainer>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer)
