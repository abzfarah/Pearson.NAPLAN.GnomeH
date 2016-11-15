import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Box, Button, Header} from '../components/common';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Footer from '../containers/Footer';
import  SchoolSearch  from './SchoolSearch';
import { selectSchool } from "../actions"
import _ from 'lodash';

class Login extends React.Component {
  constructor() {
    super()
  }

  render() {

    let { dispatch } = this.props
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
                <Button className="separate-button" label="Help" secondary={true} />
                <Button className="separate-button"  label="Log Out" onClick={() => onLogout(event, dispatch)}  primary={true} />
              </div> :
              <div>
                <Button className="separate-button"  label="Help" secondary={true} />
                <Button className="separate-button"  label="Log In" onClick={onLogin} primary={true} />
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
    const { name, code } = this.props.school;
    let string = 'School Code: ';
    var full;
    if (code != undefined) {
         full = string + code;
    }
    else full = ""

    return (
      <Box direction="row" className="school-info">
          <Header className="school-name">
            { name}
          </Header>

          <Header size="small" className="school-code">
            {full}
          </Header>
      </Box>

      )
  }
}

class HeaderContainer extends React.Component {
  constructor() {
    super()
  }

  componentWillMount(props) {
  }

  componentWillReceiveProps(nextProps) {

  //  if (this.state.currentSchool != nextProps.currentSchool) {
  //      this.setState({currentSchool: nextProps.currentSchool})
 //   }
    if (this.props.user != nextProps.user) {
        this.setState({
          loggedIn: true
        })
    }
    else return true
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    return true
  }

  render(props) {

    const { loggedIn, claims } = this.props
    const { centreSearch } = claims

    return (
      <StickyContainer>
          <Sticky style={{ zIndex: 5 }}>
            <Login status={this.props} dispatch={this.props.dispatch} />
            <Box direction="row"  wrap={true} align="center" className="second-header">
              <Box direction="row" className="school-info">
                { centreSearch  && <SchoolName school={this.props.currentSchool}/> }
              </Box>
              <Box direction="row" className="school-search">
                { centreSearch  && <SchoolSearch schools={this.props.schools} onSelect={this.selectSchool}/> }
              </Box>
            </Box>
          </Sticky>
      </StickyContainer>
  )
  }
}

function mapStateToProps(state, ownProps) {
    return {
      loggedIn: ownProps.loggedIn,
      claims: ownProps.claims
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
