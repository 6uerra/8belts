const { serenity } = require("@serenity-js/core")

module.exports={
    default:`
    --publish-quiet
    --require=features/**/*.js
    --format=@serenity-js/cucumber`,
    specs: [
        './features/support/trainers.feature',
      ]
}