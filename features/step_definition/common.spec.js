const ActionsPage = require('../../pages/actions.pages.js')
const { Given, When, Then } = require('cucumber');
const MainPageLocator = require('../../locators/main.locators.js');
const SettingsPage = require('../../pages/settings.pages.js')
const sql = require('mssql')
// const config = require('../../db_config');
const fs = require('fs')

// Given I am in Paige home Page

Given('I am in Sauce Demo login page', async function() {
    await ActionsPage.navigate("https://www.saucedemo.com/")
});

When('I wait for {string} seconds', async function (seconds) {
    await ActionsPage.wait(seconds)
});


When('I maximize the window', { timeout: 30000 }, async function () {
    await ActionsPage.maximize_window()
})


