const LoginPageLocator = require('../locators/login.locators');
const ActionsPage = require("./actions.pages");


async function swag_login(username, password) {
    await ActionsPage.type_text(LoginPageLocator.username(), username)
    await ActionsPage.type_text(LoginPageLocator.password(), password)
}

module.exports.swag_login = swag_login;
