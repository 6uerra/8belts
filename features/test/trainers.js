const { Before, After, Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

const WebDriverManager = require("../support/driver/driver.js");
const Credentials= require("../support/utils/reader.js");
const seleniumActions = require("../support/driver/seleniumActions.js");
const StepsLogin = require("../support/steps/loginSteps.js");
const StepsDashboard = require("../support/steps/dashboardSteps.js");
const StepsTrainers = require("../support/steps/trainerSteps.js");
const DataUtility = require("../support/utils/data.js");
const faker = require('faker');

Before(async function () {
  setDefaultTimeout(1000 * 10000);
  const driver = WebDriverManager.getDriver();
  this.selenium = new seleniumActions(driver);
  this.login = new StepsLogin(driver);
  this.dashboard = new StepsDashboard(driver);
  this.trainers = new StepsTrainers(driver);
  this.data = new DataUtility();
  this.credentials = new Credentials();

})


Given('I have logged in',{ timeout: 100000 },async function () {
  await this.selenium.loadPageEightbelts(this.credentials.readUserCredentials().url);
  await this.login.typeCredentials(this.credentials.readUserCredentials().username,this.credentials.readUserCredentials().password);
  await this.login.signIn();
  await this.dashboard.validateDashboard();
});

When('I go to the {string} section',{ timeout: 100000 },async function (option) {
  await this.dashboard.selectOptionList(option);
});



When('I create a new trainer with random data',{ timeout: 100000 },async function () {
  await this.data.setUser(faker.name.firstName(),faker.name.lastName(), faker.internet.email());
  await this.trainers.create( await this.data.getUser().nombre, await this.data.getUser().apellido, await this.data.getUser().email);
});


Then('I verify that the trainer has been successfully created',{ timeout: 100000 },async function () {
  await this.trainers.validateTrainer( await this.data.getUser().nombre, await this.data.getUser().apellido, await this.data.getUser().email);
});


After(async function () {
 await this.selenium.quit();
})