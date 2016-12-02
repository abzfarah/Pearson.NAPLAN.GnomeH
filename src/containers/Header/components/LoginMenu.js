import React, { Component } from 'react'
import { Box, Button } from '../../../components/common'

class LoginMenu extends Component {

  render() {
  
    let { loggedIn, onLogout, onLogin } = this.props.status;
    return (
    <div>
      <div className="header-bar"><i></i> </div>
      <Box direction="row" className="footerContainer numba1 first-header" wrap={true} align="center">
        <div className="under">
          <a href="http://imgur.com/OlNC7UY">
            <img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png"
            title="source: imgur.com" />
          </a>
        </div>
        <ul className="menu"></ul>
        <div className="button-groups">
          { loggedIn ?
            <div>
              <Button className="separate-button btn-extra" label="Help" secondary={true} />
              <Button className="separate-button btn-extra btn-extra-2" label="Log Out" onClick={() => onLogout(event)} primary={true} />
            </div> :
            <div>
              <Button className="separate-button btn-extra" label="Help" secondary={true} />
              <Button className="separate-button btn-extra" label="Log In" onClick={onLogin} primary={true} />
            </div> }
          </div>
        </Box>
      </div>
    )
  }
}

export default LoginMenu;
