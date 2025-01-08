const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    // Chỉ định đường dẫn tệp .feature
    specPattern: "cypress/test-cases/cucumber/feature/**/*.feature",
    setupNodeEvents(on, config) {
      // Kết nối plugin cucumber với file preprocessor
      on("file:preprocessor", cucumber());
      return config;
    },
  },
});
