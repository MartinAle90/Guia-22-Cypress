module.exports = {
  chromeWebSecurity: false,
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 80000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
    baseUrl: 'https://practicetestautomation.com/practice-test-login/',
  },
}
