import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Anchor, Box, Button, Header} from '../components/common';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import  LoginMenu  from '../components/LoginMenu';
import  SchoolSearch  from './SchoolSearch';
import  SchoolName  from '../components/SchoolName';
import Footer from '../containers/Footer';
import NavContainer from './NavContainer'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

import Divider from 'material-ui/Divider';
const style = {
  paper: {
    margin: 'auto',
    width: '79%',
    backgroundColor: '#9c9c9c'
 
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },

  list: {
    display: 'flex',
    paddingTop: '0px',
    paddingBottom: '0px',
    color: 'white'
  }
};

class HeaderContainer extends React.Component {
  constructor() {
    super()
  }

  componentWillReceiveProps(nextProps) {

    var x =3;
  }

  shouldComponentUpdate(nextProps) {
    if ( nextProps.isAdmin ) return true
    if ( _.isEmpty(this.props.currentSchool) && _.isEmpty(nextProps.currentSchool) && !this.props.isAdmin )  return false
        
    return true 
  }

  render(props) {

    const { loggedIn, currentSchool, claims, dispatch } = this.props

    const { centreSearch } = claims

 

    return (
    <div>
      <StickyContainer>
          <Sticky style={{ zIndex: 5 }}>
            <LoginMenu status={this.props} dispatch={dispatch} />
            <Box direction="row"  wrap={true} align="center" className="second-header">
              <Box direction="row" className="school-info">
                { loggedIn && <SchoolName school={currentSchool}/> }
              </Box>
              <Box direction="row" className="school-search">
                { centreSearch && <SchoolSearch /> }
              </Box>
            </Box>
          </Sticky>

      </StickyContainer>
          <Paper style={style.paper}>
            <Menu listStyle={style.list}  >
            { centreSearch &&   <MenuItem  onClick={()=>this.props.dispatch(push('/school'))}         primaryText="Home"            />   }
            { centreSearch &&   <MenuItem  onClick={()=>this.props.dispatch(push('/manageschools'))}  primaryText="Manage Schools"  />   }
            { centreSearch &&   <MenuItem  onClick={()=>this.props.dispatch(push('/manageusers'))}    primaryText="Manage Users"     />  } 
            { centreSearch &&   <MenuItem primaryText="Reports" />                                                                       } 
            </Menu>
          </Paper>

    </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
