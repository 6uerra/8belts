const {ConsoleReporter } = require ("@serenity-js/console-reporter");
const {configure} = require ("@serenity-js/core");

configure({
    crew: [
      ConsoleReporter.withDefaultColourSupport()
    ],
  });