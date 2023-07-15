const { By } = require("selenium-webdriver");
const seleniumActions = require("../../support/driver/seleniumActions.js");
const { expect } = require('chai');

module.exports = class PageDashboard {
  constructor(driver) {
    this.driver = driver;
    this.selenium = new seleniumActions(driver);
    this.textListOfStudents = By.xpath("//h1[contains(.,'Listado de alumnos')]");
    this.textQualityControlCandidate = By.xpath("(//span[contains(.,'Candidato QA')])[2]");
    this.inputEmail = By.xpath("(//mat-label[contains(.,'E-Mail')])[1]");
    this.dropDownlistStudent = By.xpath("(//mat-label[contains(.,'Tipo de alumno')])[1]");
    this.buttonFilterClean = By.xpath("//span[@class='mdc-button__label'][contains(.,'Borrar filtros')]");
    this.buttonTrainersList = By.xpath("(//span[contains(.,'language Listado de trainers')])[2]");
    this.optionselectList;


  }


  async validateTextListOfStudens() {
    expect(await this.selenium.isDisplayed(this.textListOfStudents), 'The text does not match "Listado de alumnos"').to.equal(true);

  }


  async validateTextQualityControlCandidate() {
    expect(await this.selenium.isDisplayed(this.textQualityControlCandidate), 'The text does not match "candidato a control de calidad"').to.equal(true);

  }


  async validateinputEmail() {
    expect(await this.selenium.isDisplayed(this.inputEmail), 'not found input de "Email"').to.equal(true);

  }

  async validateDropDownlistStudent() {
    expect(await this.selenium.isDisplayed(this.dropDownlistStudent), 'not found list de "Tipo de alumno"').to.equal(true);

  }

  async validateButtonFilterClean() {
    expect(await this.selenium.isDisplayed(this.buttonFilterClean), 'not found button de "Borrar filtros"').to.equal(true);

  }

  async validateButtonTrainersList() {
    expect(await this.selenium.isDisplayed(this.buttonTrainersList), 'Listado de trainers"').to.equal(true);

  }

  async clickButtonTrainersList() {
    await this.selenium.click(this.buttonTrainersList);
  }



};
