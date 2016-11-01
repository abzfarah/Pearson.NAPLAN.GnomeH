import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Header from 'grommet/components/Header';
import Footer from '../containers/Footer';
import Box from '../components/common/Box';
import Button from '../components/common/Button';

import  SchoolNameContainer  from './SchoolNameContainer';
import  SchoolSearch  from './SchoolSearch';
import userManager from '../components/utils/oidc/userManager';
import _ from 'lodash';
import {storedUser} from '../components/redux-oidc/oidcMiddleware';

import {selectSchool} from "../actions"


class Login extends React.Component {

  constructor() {
    super()
  }
  render() {
    debugger;

    let { loggedIn, onLogout, onLogin } = this.props.status;
    return (
    <div>
      <div className="header-bar"><i></i> </div>
      <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="first-header">
          <div className="under">
              <a href="http://imgur.com/OlNC7UY"><img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
          </div>
          <ul className="menu"></ul>
          <div className="button-groups">
            { loggedIn ?
              <div>
                <Button label="Help" secondary={true} />
                <Button label="Log Out" onClick={onLogout} primary={true} />
              </div> :
              <div>
                <Button label="Help" secondary={true} />
                <Button label="Log In" onClick={onLogin} primary={true} />
              </div> }
          </div>
        </Box>
      </div>
      )
  }
}

class SchoolName extends React.Component {

  constructor() {
    super()
  }
  render() {
    debugger;

    var x =67;
    return (
      <div className="school-heading">
          <Header className="school-name">

          </Header>

          <Header size="small" className="school-code">

          </Header>
      </div>
      )
  }
}



class HeaderContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      schools: null,
      loggedIn: null,
      currentSchool: []
   }
  }

  componentWillMount(props) {
     this.state = {
      schools: this.props.schools,
      loggedIn: this.props.loggedIn
   }
    debugger;
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.currentSchool) {

    }
    debugger;
  }

  selectSchool() {


  }

  componentDidMount() {
    debugger;
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    debugger;
  }

  render(props) {
    const { loggedIn } = this.props
    debugger;
    return (
      <StickyContainer>
          <Sticky style={{ zIndex: 5 }}>
            <Login status={this.props}/>
            <Box direction="row"  wrap={true} align="center" className="second-header">

              <SchoolName school={this.props.school} />
              <SchoolSearch schools={this.props.schools} onSelect={this.selectSchool} />

            </Box>
          </Sticky>
      </StickyContainer>
  )
  }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
