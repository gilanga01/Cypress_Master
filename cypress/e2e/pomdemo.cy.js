import { LoginPage } from "./pages/login_page"

var loginPage = new LoginPage();


beforeEach('Load the URL', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
describe('All Tests', function () {
    it('Test case 1: Login with correct username and correct password', function () {


        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        // loginPage.SigninError()

    })

    it('Test case 2:Login with correct username and wrong password', function () {


        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin1123')
        loginPage.clickLogin()
        // loginPage.SigninError()

    })

    it('Test case 3:Login with wrong username and correct password', function () {


        loginPage.enterUsername('Admin1')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        // loginPage.SigninError()

    })

    it('Test case 4:Login with wrong  username and wrong password', function () {


        loginPage.enterUsername('Admin1')
        loginPage.enterPassword('admin1123')
        loginPage.clickLogin()
        // loginPage.SigninError()
        

    })
})
