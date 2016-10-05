import  createUserManager  from '../../../helpers/createUserManager';

// user manager configuration object, see oidc-client-js documentation for details
const config = {
  client_id: 'VICRegWeb',
  redirect_uri: 'http://localhost:8004/home',
  response_type: 'id_token token',
  scope: 'openid profile email roles VICRegScope all_claims',
  authority: 'https://melbndevweb1.epenau.local:1301/ids',
  post_logout_redirect_uri: 'http://localhost:8004/login',
  silent_redirect_uri: 'http://localhost:8004/login',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

// create an user manager instance
const userManager = createUserManager(config);

export default userManager;
