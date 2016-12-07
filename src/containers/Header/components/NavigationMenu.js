import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Menu from '../../../components/common/Menu/Menu'
import MenuItem from '../../../components/common/Menu/MenuItem'
import { push } from 'react-router-redux'

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


export class NavigationMenu extends Component {
  render () {
    const { claims: { centreSearch } } = this.context
    return (
      <div>
        <Paper style={style.paper}>
          <Menu listStyle={style.list} style={style.menu}>
            {<MenuItem onClick={() => this.props.routeActions.push('/school')} primaryText="Home" /> }
            { centreSearch && <MenuItem onClick={() => this.props.routeActions.push('/manageschools')} primaryText="Manage Schools" /> }
            { centreSearch && <MenuItem onClick={() => this.props.routeActions.push('/manageusers')} primaryText="Manage Users" /> }
            { centreSearch && <MenuItem primaryText="Reports" /> }
          </Menu>
        </Paper>
      </div>
    )
  }
}

NavigationMenu.contextTypes = {
  claims: React.PropTypes.object
}
export default NavigationMenu
