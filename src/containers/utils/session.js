class Session {

  constructor() {
    this._loggedIn = false;
  }

  set login(status) {
    this._loggedIn = status;
  }

  get login() {
    return this._loggedIn;
  }

  get exists() {
    return sessionStorage.getItem('userSession') ? true : false
  }

  get user() {
    return JSON.parse(sessionStorage.getItem('userSession'))
  }
}

const session = new Session()

export default session
