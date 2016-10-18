import React from 'react';
import Button from '../../common/Button';
import userManager from '../../utils/oidc/userManager';

class LoginPage extends React.Component {

  onLoginButtonClick = (event) => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  onLogoutButtonClick = (event) => {
    event.preventDefault();
    userManager.signoutRedirect();
  };

  render() {

    return (
      <div>
        <h1>Login Page</h1>
        <Button label="Login using Identity Manager" onClick={this.onLoginButtonClick} />
        <Button label="Log Out" onClick={this.onLogoutButtonClick} />
      </div>
    );
  }

}

export default LoginPage;
