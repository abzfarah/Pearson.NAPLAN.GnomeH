import { createUserManager } from 'redux-oidc';

// user manager configuration object, see oidc-client-js documentation for details
const config = {
  client_id: 'StatDec',
  redirect_uri: 'http://www.google.com',
  response_type: 'id_token token',
  scope: 'openid profile email roles StatDec all_claims',
  authority: 'https://melbndevweb1.epenau.local:1301/ids',
  post_logout_redirect_uri: 'https://au.yahoo.com/',
  silent_redirect_uri: 'https://au.yahoo.com/',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

// create an user manager instance
const userManager = createUserManager(config);

export default userManager;
