// cypress.config.mjs
// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/e2e/*/*spec.js", // Cấu hình pattern
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'index',
    overwrite: false,
    html: true,
    json: true,
    charts: true
  }
});

