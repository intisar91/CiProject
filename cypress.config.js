const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = {
  ...(on, config) => {
    on("file:preprocessor", cucumber());
  },

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
