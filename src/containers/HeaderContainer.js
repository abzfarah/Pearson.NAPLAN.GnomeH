import React from 'react';
import Footer from '../containers/Footer';
import userManager from '../components/utils/oidc/userManager';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Header from 'grommet/components/Header';
import { push } from 'react-router-redux';
import _ from 'lodash';



import  SchoolName  from '../components/SchoolName';

import auth from '../routes/utils/auth'

import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
  constructor() {
    super()
  }



  componentDidMount(props, state) {
    var x =3;


  }

  componentWillMount(props) {
    var isloggedIn = auth.loggedIn()
  }


  render(props) {
    var loggedIn = this.props.loggedIn;

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
