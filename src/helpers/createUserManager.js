import UserManager  from './OIDC/UserManager';

export default function createUserManager(config) {
  return new UserManager(config);
}
