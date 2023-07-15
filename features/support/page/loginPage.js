const { By } = require("selenium-webdriver");
const seleniumActions = require("../../support/driver/seleniumActions.js");

module.exports = class PageLogin {
  constructor(driver) {
    this.driver = driver;
    this.selenium = new seleniumActions(driver);
    this.inputUser = By.id("mat-input-0");
    this.inputPassword = By.id("mat-input-1");
    this.buttonSignIn = By.xpath("(//span[contains(.,'login Iniciar sesión')])[2]");
    this.listOfStudents = By.xpath("//h1[contains(.,'Listado de alumnos')]");

  }


  async typeUser(user) {

    await this.selenium.type(this.inputUser,user);

  }

  async typePassword(password) {
    await this.selenium.type(this.inputPassword,password);
  }

  async clickSignIn() {
   await this.selenium.click(this.buttonSignIn);
  }



};
