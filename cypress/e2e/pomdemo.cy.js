import { LoginPage } from "./pages/login_page"

var loginPage = new LoginPage();

it('POM demo', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()

})