import userManager from './userManager';

const claims_list =
[ 'centreSearch',
  'centre',
  'soc',
  'schoolCode',
  'authorizedStaff',
  'userService',
  'socService',
  'alternativeTestFormatOrder',
  'studentRegistrationData'
]

class Session {

  constructor() {
    this._loggedIn = this.exists
    this._isAdmin = false
    this._claims = false
    this._schoolUser = false
    this._schoolcode = false
  }

  set login(status) {
    this._loggedIn = status;
  }

  get login() {
    return this._loggedIn;
  }

  get exists() {
    return sessionStorage.getItem(this._sessionKey) ? true : false
  }

  get school() {
    return this._schoolUser
  }

  get schoolcode() {
    return this._schoolcode
  }

  get user() {
    return JSON.parse(sessionStorage.getItem(this._sessionKey))
  }

  get claims() {
    return (this._claims || this._retrieveClaims)
  }

  get isAdmin() {
    return this._isAdmin
  }

  get _sessionKey() {
    return this._prefix+this._key
  }

  get _prefix() {
    return userManager._userStore._prefix
  }

  get _key() {
    return userManager._userStoreKey
  }
  
  get _retrieveClaims() {
    let claims = this.user.profile;
    let filter_claims = _.pick(claims, claims_list);
    let user_claims = _.pickBy(filter_claims, _.isString);
    //if there is a "schoolCode" claim, user is NOT an admin
    this._isAdmin = user_claims["schoolCode"] ? false : true
    this._schoolUser = this._isAdmin ? true : false

    if (this._schoolUser) this._schoolcode = user_claims["schoolCode"] 
    
    //Normalise user claims properties
    user_claims = _.mapValues(user_claims, function(value) {
          value = _.toLower(value)

          if (value == "false") return false
              else return true
        }
      )
    this._claims = user_claims
    return user_claims
  }  

}

const session = new Session()

export default session