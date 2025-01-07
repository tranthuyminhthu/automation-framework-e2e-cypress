const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/cucumber/feature/**/*.feature", // Điều chỉnh theo đúng đường dẫn
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
