const { By, Key } = require("selenium-webdriver");
const seleniumActions = require("../driver/seleniumActions.js");
const textUtility = require("../utils/textUtility.js");
const { expect } = require('chai');

module.exports = class PageTrainers {
  constructor(driver) {
    this.driver = driver;
    this.selenium = new seleniumActions(driver);
    this.textUtility = new textUtility(driver);

    this.textListOfTrainer = By.xpath("//h1[contains(.,'Listado de trainers')]");
    this.buttonAddTrainer = By.xpath("//span[@class='mdc-button__label'][contains(.,'Añadir trainer')]");
    this.inputNameTrainer = By.xpath("//input[contains(@class, 'mat-mdc-input-element') and contains(@class, 'ng-invalid') and @ng-reflect-name='name']");
    this.inputLastNameTrainer = By.xpath("//input[contains(@class, 'mat-mdc-input-element') and contains(@class, 'ng-invalid') and @ng-reflect-name='surname']");
    this.inputEmailTrainer = By.xpath("//input[contains(@class, 'mat-mdc-input-element') and contains(@class, 'ng-invalid') and @ng-reflect-name='email']");
    this.lists = By.xpath("//span[@class='mdc-list-item__primary-text'][contains(.,'')]");
    this.createTrainer = By.xpath("(//span[contains(.,'Crear trainer')])[2]");
    this.inputSearchEmailTrainer = By.xpath('//*[@id="mat-input-0"]');
    this.buttonTrainersList = By.xpath("(//span[contains(.,'language Listado de trainers')])[2]");
    this.textGetName = By.xpath("//td[contains(@class,'column-name')]");
    this.textGetEmail = By.xpath("//td[contains(@class,'column-email')]");
    this.textGetDate = By.xpath("//td[contains(@class,'column-create')]");
    this.elementSchedule = By.xpath("(//span[contains(@class,'mat-mdc-button-touch-target')])");

  }

  async validateTextListOfTrainer() {
    expect(await this.selenium.isDisplayed(this.textListOfTrainer), 'The text does not match "Listado de trainers"').to.equal(true);

  }

  async clickAddTrainer() {
    await this.selenium.click(this.buttonAddTrainer);
  }

  async typeNameTrainer(text) {
    await this.selenium.click(this.inputNameTrainer);
    await this.selenium.type(this.inputNameTrainer, text);
  }

  async typeLastNameTrainer(text) {
    await this.selenium.type(this.inputLastNameTrainer, text);
  }

  async typeEmailTrainer(text) {
    await this.selenium.type(this.inputEmailTrainer, text);
  }

  async typeWorkHours() {

    // Random selection of hours

    for (let i = 1; i <= 8; i++) {
      if (i % 2 === 0) {
        this.time = By.xpath("(//input[contains(@type,'time')])[" + i + "]");

        let randomSchedules = await this.textUtility.getHoursStartAndEnd();
        await this.selenium.type(this.time, randomSchedules[1]);

      } else {
        this.time = By.xpath("(//input[contains(@type,'time')])[" + i + "]");

        let randomSchedules = await this.textUtility.getHoursStartAndEnd();
        await this.selenium.type(this.time, randomSchedules[0]);
      }
    }

    // actions to copy and paste schedules
    const elementsSchedule = await this.selenium.findElements(this.elementSchedule);
    const numerosClic = [40, 57, 44, 61];

    for (let numero of numerosClic) {
      elementsSchedule[numero - 1].click();
    }

  }


  async selecteOptionRandom(option) {
    //Randomly select options from dropdown lists
    this.optionList = By.xpath("(//mat-label[contains(.,'" + option + "')])[11]");
    await this.selenium.click(this.optionList);
    const elements = await this.selenium.findElements(this.lists);

    const value = await this.textUtility.getRandomText(elements);
    this.optionselectList = By.xpath("//span[@class='mdc-list-item__primary-text'][contains(.,'" + value + "')]");

    //Randomly select options from dropdown lists
    if (option === "Rutas del trainer" || option === "Idiomas") {
      await new Promise(resolve => setTimeout(resolve, 1000));
      for (let i = 0; i < 2; i++) {

        const elements = await this.selenium.findElements(this.lists);
        const value = await this.textUtility.getRandomText(elements);
        this.optionselectList = By.xpath("//span[@class='mdc-list-item__primary-text'][contains(.,'" + value + "')]");
        await new Promise(resolve => setTimeout(resolve, 1000));

        await this.selenium.clickElementNoDisplay(this.optionselectList);
        await new Promise(resolve => setTimeout(resolve, 1000));

      }
      await this.selenium.keyTab();

    }

    else {
      await this.selenium.clickElementNoDisplay(this.optionselectList);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.selenium.keyTab();
    }

  }

  async clickCreateTrainer() {
    await this.selenium.click(this.createTrainer);
  }


  async searchEmailTrainer(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await this.selenium.refresh();
    await this.selenium.type(this.inputSearchEmailTrainer, email)
    await new Promise(resolve => setTimeout(resolve, 5000));
  }


  async getNameTrainers() {
    return await this.selenium.getText(this.textGetName);
  }

  async getEmailTrainers() {
    return await this.selenium.getText(this.textGetEmail);
  }

  async getDateTrainers() {
    return await this.selenium.getText(this.textGetDate);
  }

}
