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
import Menu from '../../components/common/Menu/Menu'
import MenuItem from '../../components/common/Menu/MenuItem'

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
    const { loggedIn, currentSchool } = this.props
    

    return (
      <div>
      <StickyContainer>
        <Sticky style={{ zIndex: 5 }}>
          <LoginMenu status={this.props} />
          <Box direction="row" wrap={true} align="center" className="second-header">
            <Box direction="row" className="school-info">
              { loggedIn && <SchoolName school={currentSchool} /> }
            </Box>
            <Box direction="row" className="school-search">
              { <SchoolSearch /> }
            </Box>
          </Box>
        </Sticky>

      </StickyContainer>
        <Paper style={style.paper}>
          <Menu listStyle={style.list} innerDivStyle={style.menu}>
            { <MenuItem onClick={() => this.props.routeActions.push('/school')} primaryText="Home" /> }
            {<MenuItem onClick={() => this.props.routeActions.push('/manageschools')} primaryText="Manage Schools" /> }
            {<MenuItem onClick={() => this.props.routeActions.push('/manageusers')} primaryText="Manage Users" /> }
            {<MenuItem primaryText="Reports" /> }
          </Menu>
        </Paper>
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
