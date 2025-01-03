// cypress.config.mjs
// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/test-cases/**/*.spec.js", // Chọn tất cả các file .spec.js trong thư mục test-cases và các thư mục con

  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});

