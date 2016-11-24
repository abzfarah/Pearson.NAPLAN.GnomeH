import { createUserManager } from 'redux-oidc';

let _callbackURI;
if (__DEV__)                _callbackURI = "http://localhost:8004/callback"  
if (__DEVSERVER__)          _callbackURI = "http://melbndevweb1.epenau.local:2016/callback" 
if (__INTSTG__)             _callbackURI = "http://melbnintstgweb1.epenau.local:2016/callback"  
if (__STG__)                _callbackURI = "http://melbnstgweb1.epenau.local:2016/callback"  

var config = {
    client_id: 'VICRegWeb',
    redirect_uri: _callbackURI,
    response_type: 'id_token token',
    scope: 'openid profile email roles VICRegScope all_claims',
    authority: 'https://melbndevweb1.epenau.local:1301/ids',
    post_logout_redirect_uri: 'http://localhost:8004/',
    silent_redirect_uri: 'http://melbnstgweb1.epenau.local:2016/summary',
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true
};

// create an user manager instance
const userManager = createUserManager(config);

export default userManager;
