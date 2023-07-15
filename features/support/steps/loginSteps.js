const pageLogin = require("../page/loginPage.js");

module.exports = class StepsLogin {
    constructor(driver) {
        this.pageLogin = new pageLogin(driver);

    }

    async typeCredentials(user, password) {

        await this.pageLogin.typeUser(user);
        await this.pageLogin.typePassword(password);

    }

    async signIn() {
        await this.pageLogin.clickSignIn();

    }

}