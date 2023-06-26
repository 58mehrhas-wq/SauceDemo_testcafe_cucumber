const ActionsPage = require('../../../pages/actions.pages.js');
const { When, Then } = require('cucumber');
const PaigeHomePageLocator = require('../../../locators/paige/paige_homePage.locators.js');
const PaigeWomenPantsPageLocator = require('../../../locators/paige/paige_womenPantsPage.locators.js');
const assert = require('assert');

// When I close the popup

When('I close the popup', async function() {
    await ActionsPage.click_element(PaigeHomePageLocator.closePopup())
});

// And I assert the PAIGE logo appears

When('I assert the PAIGE logo appears', async function() {
    await ActionsPage.assert_exists(PaigeHomePageLocator.paigeBtn())
});

// Then I click on Women tab

Then('I hover on Women tab', async function() {
    await ActionsPage.hover_element(PaigeHomePageLocator.womenTab())
});

// Then I select Pants option

Then('I select Pants option', async function() {
    await ActionsPage.click_element(PaigeHomePageLocator.pantsOption())
});

// And I assert the WOMEN PANTS title appears

When('I assert the WOMEN PANTS title appears', async function() {
    await ActionsPage.assert_exists(PaigeWomenPantsPageLocator.womenPantsTitle())
});

// When I click into the search field

When('I click into the search field', async function() {
    await ActionsPage.click_element(PaigeWomenPantsPageLocator.searchField())
});

// When I search for <pantsItem></pantsItem>

Then('I search for {string}', async function(pantsItem) {
    await ActionsPage.fill_element(PaigeWomenPantsPageLocator.searchField(), pantsItem);
});

// And I click on Brooklyn button

When('I click on Brooklyn button', async function() {
    await ActionsPage.click_element(PaigeWomenPantsPageLocator.brooklynBtn())
});

