// cypress.config.mjs
// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/e2e/*/*spec.js", // Cấu hình pattern
  },
});

