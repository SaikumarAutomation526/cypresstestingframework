const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    env:{
      baseUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    },
  },

});
