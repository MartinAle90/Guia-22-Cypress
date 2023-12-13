const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  cleanSession: false, // Agrega esta línea para desactivar la limpieza de sesión
});
