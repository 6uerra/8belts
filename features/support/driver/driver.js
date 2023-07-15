const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");

module.exports = class WebDriverManager {

  static getDriver() {
    const options = new chrome.Options();
    // options.addArguments("--headless"); 
    options.addArguments("enable-automation");
    options.setPageLoadStrategy("eager");
    const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    driver.manage().window().maximize();

    return driver;
  }


}
