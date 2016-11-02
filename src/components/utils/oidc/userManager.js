import  createUserManager  from '../../../helpers/createUserManager';

const config = {
  client_id: '411289226499-83otrjgl89k4oa3ku6l4b5e0qqkehjb6.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:8004/callback',
  response_type: 'id_token token',
  scope: 'openid profile',
  authority: 'https://accounts.google.com',
  post_logout_redirect_uri: 'http://localhost:8004/',
  silent_redirect_uri: 'http://localhost:8004/home',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

// create an user manager instance
const userManager = createUserManager(config);

export default userManager;
