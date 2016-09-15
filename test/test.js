module.exports = {
  test123: function (browser) {
    browser
      .url('http://localhost:3333')
      .waitForElementVisible('body');
    browser
      .assert.containsText('body', 'Hello Nightwatch')
      .end();
  }
};
