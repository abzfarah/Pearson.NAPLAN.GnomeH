import { jsdom } from 'jsdom'

function storageMock () {
  var storage = {}

  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return storage[key] || null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length () {
      return Object.keys(storage).length
    },
    key: function (i) {
      var keys = Object.keys(storage)
      return keys[i] || null
    }
  }
}

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = jsdom(documentHTML)
global.window = document.parentWindow
window.localStorage = storageMock()
// mock the sessionStorage
window.sessionStorage = storageMock()
global.userManager = {
  _userStore: {
    '_prefix': jest.fn().mockReturnValueOnce(1)
  }
}
