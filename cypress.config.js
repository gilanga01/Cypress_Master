const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //watchForFileChanges: True,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
