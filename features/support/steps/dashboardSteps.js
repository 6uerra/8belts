const pageDashboard = require("../page/dashboardPage.js");

module.exports = class StepsDashboard {
  constructor(driver) {
    this.pageDashboard = new pageDashboard(driver);

  }

  async validateDashboard() {

    await this.pageDashboard.validateTextListOfStudens();
    await this.pageDashboard.validateTextQualityControlCandidate();
    await this.pageDashboard.validateinputEmail();
    await this.pageDashboard.validateDropDownlistStudent();
    await this.pageDashboard.validateButtonTrainersList();
  }

  async validateDashboard() {

    await this.pageDashboard.clickButtonTrainersList();

  }
  async selectOptionList() {

    await this.pageDashboard.clickButtonTrainersList();

  }

  

}