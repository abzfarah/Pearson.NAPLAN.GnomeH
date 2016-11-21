import React, { Component } from 'react';
import {Box, Button} from './common';
import classnames from 'classnames';

class LoginMenu extends React.Component {
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

export default  LoginMenu;
