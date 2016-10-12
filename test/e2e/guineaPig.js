module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .clearValue('#i_am_a_textbox')
      .setValue('#i_am_a_textbox', 'nightwatch roolz!')
      .end();
  }
};
