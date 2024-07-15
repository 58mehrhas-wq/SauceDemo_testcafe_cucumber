const LoginPage = require('../../pages/login.pages.js');
const ActionsPage = require('../../pages/actions.pages.js')
const LoginPageLocator = require('../../locators/login.locators.js');
const { When, Then } = require('cucumber');

When('I enter {string} and {string}', async function (username, password) {
    await LoginPage.swag_login(username, password)
});

When('I click on Login button', async function () {
    await ActionsPage.click_element(LoginPageLocator.login_button())
});




