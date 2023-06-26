const ActionsPage = require('../../pages/actions.pages.js')
const { Given, When, Then } = require('cucumber');
const MainPageLocator = require('../../locators/main.locators.js');
const SettingsPage = require('../../pages/settings.pages.js')
const sql = require('mssql')
// const config = require('../../db_config');
const fs = require('fs')

// Given I am in Paige home Page

Given('I am in Paige home Page', async function() {
    await ActionsPage.navigate("https://www.paige.com")
});




// Given('I am in Scorpion login page', async function () {
//     await ActionsPage.navigate("https://login-integration.scorpion.co/")
// });

// Given('I am in Scorpion {string} page', async function (url) {
//     if (url == "settings") {
//         // await ActionsPage.navigate("http://localhost:4200/" + url)
//         await ActionsPage.wait(3)
//         if (await ActionsPage.assert_exists('[class="exit-button"]') == true) {
//             await ActionsPage.click_element('[class="exit-button"]')
//         }
//         await ActionsPage.click_element(MainPageLocator.settings_button())
//         await ActionsPage.hover_element_from_list(MainPageLocator.settings_options(), "App Settings")
//         await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), "App Settings")

//     }
//     if (url == "phone") {
//         // await ActionsPage.click_element(MainPageLocator.settings_button())
//         await ActionsPage.click_element('[data-cy=dock-app-tile-comms-phone]')
//     }
    // else {
    //     await ActionsPage.navigate("http://localhost:4200/" + url)
    // }
// });

When('I wait for {string} seconds', async function (seconds) {
    await ActionsPage.wait(seconds)
});

// When('I click on settings button', async function () {
//     await ActionsPage.click_element(MainPageLocator.settings_button())
// });

// Then('I select the {string} option', async function (option) {
//     await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), option)
// });

// When('I sign out Scorpion', async function () {
//     await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), "Sign Out")
// });

// When('I hover on More option', async function () {
//     await SettingsPage.hover_more_option()
// });

// DB Code - VPN DEPENDENCY - DEPRECATED
// When('I execute the next query {string}', { timeout: 30000 }, async function (file) {
//     await sql.connect(config)
//     var query_file = fs.readFileSync('./sql/' + file + '.sql', 'utf8');
//     await sql.query([query_file])
// })

When('I maximize the window', { timeout: 30000 }, async function () {
    await ActionsPage.maximize_window()
})

// When('I assert we are in Scorpion main page', { timeout: 30000 }, async function () {
//     const element = ActionsPage.select(MainPageLocator.main_title());
//     await testController.expect(element.exists).ok();
// })

// Then('I assert that the text is shown {string}', { timeout: 30000 }, async function (value) {
//     const element = await ActionsPage.select('scorpion-snackbar').innerText;
//     await testController.expect(element).contains(value)
// })

// When('I upload the file', { timeout: 30000 }, async function () {
//     await testController.setFilesToUpload('div > scorpion-file-upload > input', '../../upload/IMG_0071.jpg')
// })

// When('I run the request {string} with {string}', async function (request, param_1) {
//     var headers = await ActionsPage.bearer()
//     await ActionsPage.execute_request_param(headers, request, param_1)
//     await ActionsPage.logoff(headers)
// })

// When('I run the request {string}', async function (request) {
//     var url = "https://integration.scorpion.co/csx/billing/graphql"
//     var headers = await ActionsPage.bearer()
//     await ActionsPage.execute_request(headers, request, url)
//     await ActionsPage.logoff(headers)
// })
