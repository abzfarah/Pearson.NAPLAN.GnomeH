module.exports = {

  getToken: function () {
    return sessionStorage.getItem('oidc.user:https://melbndevweb1.epenau.local:1301/ids:VICRegWeb')
  },

  logout: function (cb) {
    sessionStorage.removeItem('oidc.user:https://melbndevweb1.epenau.local:1301/ids:VICRegWeb')
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!sessionStorage.getItem('oidc.user:https://melbndevweb1.epenau.local:1301/ids:VICRegWeb')
  },

  onChange: function () {}
}
