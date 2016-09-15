module.exports = {
  src_folders: [
    'test'// Where you are storing your Nightwatch e2e tests
  ],
  selenium: { // downloaded by selenium-download module (see readme)
    start_process: true, // tells nightwatch to start/stop the selenium process
    server_path: './node_modules/nightwatch/bin/selenium.jar',
    host: '127.0.0.1',
    port: 4444, // standard selenium port
    cli_args: { // chromedriver is downloaded by selenium-download (see readme)
      'webdriver.chrome.driver': './node_modules/nightwatch/bin/chromedriver'
    }
  },
  test_settings: {
    default: {
      globals: {
        waitForConditionTimeout: 5000 // sometimes internet is slow so wait.
      },
      desiredCapabilities: { // use Chrome as the default browser for tests
        browserName: 'chrome'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true // turn off to test progressive enhancement
      }
    }
  }
};
