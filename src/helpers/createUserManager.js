import UserManager  from './OIDC/UserManager';

var x = 4;

export default function createUserManager(config) {
  return new UserManager(config);
}


//
