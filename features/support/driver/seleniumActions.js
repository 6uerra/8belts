const { until, Key } = require("selenium-webdriver");
module.exports = class seleniumActions {
  constructor(driver) {
    this.driver = driver;
  }

  async loadPageEightbelts(url) {

    await this.driver.get(url);
  }

  async refresh() {

    await this.driver.navigate().refresh();
  }



  async findElement(locator) {
    await this.driver.wait(until.elementLocated(locator), 15000);
    return this.driver.findElement(locator);
  }

  async findElements(locator) {
    await this.driver.wait(until.elementLocated(locator), 15000);
    return this.driver.findElements(locator);
  }

  async type(locator, value) {
    const element = await this.findElement(locator);
    element.sendKeys(value);
  }
  async click(locator) {
    const element = await this.findElement(locator);
    element.click();
  }

  async clickElementNoDisplay(locator) {
    const element = await this.findElement(locator);
    this.driver.executeScript('arguments[0].click();', element);
  }

  async isDisplayed(locator) {
    const element = await this.findElement(locator);
    return element.isDisplayed();
  }

  async getText(locator) {
    const element = await this.findElement(locator);
    return element.getText();
  }


  async keyTab() {
    const actions = this.driver.actions({ bridge: true });
    actions.keyDown(Key.TAB)
      .keyUp(Key.TAB)
      .perform();
  }

  async quit() {

    await this.driver.quit();


  }

}