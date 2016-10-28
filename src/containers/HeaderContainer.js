import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Header from 'grommet/components/Header';
import Footer from '../containers/Footer';
import Box from '../components/common/Box';
import Button from '../components/common/Button';
import  SchoolName  from '../components/SchoolName';
import auth from '../routes/utils/auth'
import userManager from '../components/utils/oidc/userManager';
import _ from 'lodash';


class HeaderContainer extends React.Component {
  constructor() {
    super()
    this.state = {loggedIn: false}
  }

  componentWillMount(props) {

  }

  componentDidMount(props, state) {
    debugger;

  }

  shouldComponentUpdate(nextProps, nextState) {

    if ( nextState.loggedIn == true) {
      this.state.loggedIn = true
    }

    if ( nextProps.loggedIn != undefined ) {
      if ( nextProps.loggedIn == true) {
        this.state.loggedIn = true
      }
    }




    var nextState = nextState;
    var nextProps = nextProps;
    return true;


  }


  render(props) {


    var loggedIn = this.props.ownProps.loggedIn || this.props.loggedIn;

    debugger;

    return (
              <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="first-header">
                  <div className="under">
                      <a href="http://imgur.com/OlNC7UY"><img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
                  </div>
                  <ul className="menu"></ul>
                  <div className="button-groups">

                  { loggedIn ? (<div>
                      <Button label="Help" secondary={true} />
                      <Button label="Log Out" onClick={this.props.onLogout} primary={true} />
                      </div>
                      ) : (
                        <div>
                      <Button label="Help" secondary={true} />
                      <Button label="Log In" onClick={this.props.onLogin} primary={true} />
                      </div>
                      )}
                  </div>

              </Box>
  )
}
}




function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        error: state.error.error,
        ownProps: ownProps,
        loggedIn: state.session.loggedIn,
        claims: state.session.claims,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
