import userManager from './userManager'

const claimsList =
// eslint-disable-next-line
[   'centreSearch',
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

  constructor () {
    this._loggedIn = this.exists
    this._isAdmin = false
    this._claims = false
    this._schoolUser = false
    this._schoolcode = false
    this._prefix = ''
    this._key = ''
  }

  set login (status) {
    this._loggedIn = status
  }

  set _prefix (d) {
    return
  }

  set _key (d) {
    return
  }

  get login () {
    return this._loggedIn
  }

  get exists () {
    return window.sessionStorage.getItem(this._sessionKey) ? true : false
  }

  get school () {
    return this._schoolUser
  }

  get schoolcode () {
    return window.sessionStorage.getItem('currentSchool') || this._schoolcode
  }

  get user () {
    return JSON.parse(window.sessionStorage.getItem(this._sessionKey))
  }

  get claims () {
    return (this._claims || this._retrieveClaims)
  }

  get isAdmin () {
    return this._isAdmin
  }

  get _sessionKey () {
    return this._prefix + this._key
  }

  get _prefix () {
    return userManager._userStore._prefix
  }

  get _key () {
    return userManager._userStoreKey
  }

  get _retrieveClaims () {
    let claims = this.user.profile
    let filterClaims = _.pick(claims, claimsList)
    let userClaims = _.pickBy(filterClaims, _.isString)
    // if there is a "schoolCode" claim, user is NOT an admin
    this._schoolcode = userClaims['schoolCode']
    this._isAdmin = userClaims['schoolCode'] ? false : true
    this._schoolUser = this._isAdmin ? true : false

    if (this._schoolUser) this._schoolcode = userClaims["schoolCode"] 

    // Normalise user claims properties
    userClaims = _.mapValues(userClaims, function (value) {
          value = _.toLower(value)

          if (value == "false") return false
              else return true
        }
      )
    this._claims = userClaims
    return userClaims
  }

}

const session = new Session()

export default session
