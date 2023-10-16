const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        CYPRESS_VERIFY_TIMEOUT: 1000
    },
    video: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    }
  })
