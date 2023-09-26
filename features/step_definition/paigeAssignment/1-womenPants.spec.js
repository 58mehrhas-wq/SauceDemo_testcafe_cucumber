const ActionsPage = require('../../../pages/actions.pages.js');
const { When, Then } = require('cucumber');
const PaigeHomePageLocator = require('../../../locators/paige/paige_homePage.locators.js');
const PaigeWomenPantsPageLocator = require('../../../locators/paige/paige_womenPantsPage.locators.js');
const PaigeBrooklynPageLocator = require('../../../locators/paige/paige_brooklynPage.locators.js')
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

// And I assert the Brooklyn title appears

When('I assert the Brooklyn title appears', async function() {
    await ActionsPage.assert_exists(PaigeBrooklynPageLocator.brooklynPageTile()) 
});

// When I select size 24
When('I select size 24', async function() {
    await ActionsPage.click_element(PaigeBrooklynPageLocator.size24())
});


// Then In Stock message appears
Then('In Stock message appears', async function() {
    await ActionsPage.assert_exists(PaigeBrooklynPageLocator.inStock())
});

// When I select size 27
When('I select size 27', async function() {
    await ActionsPage.click_element(PaigeBrooklynPageLocator.size27())
});


// Then Sold Out message appears
Then('Sold Out message appears', async function() {
    await ActionsPage.assert_exists(PaigeBrooklynPageLocator.soldOut())
});

// When I select size 29
When('I select size 32', async function() {
    await ActionsPage.click_element(PaigeBrooklynPageLocator.size32())
});

// Then I add it to the shopping bag
Then('I add it to the shopping bag', async function() {
    await ActionsPage.doubleClick_element(PaigeBrooklynPageLocator.addToShoppingBag())
});

// And The Good News Shipping message displays
Then('The Good News Shipping message displays', async function() {
    await ActionsPage.assert_exists(PaigeBrooklynPageLocator.goodNewsShippingMsg())
});

// Then I assert the Checkout button exists
Then('I assert the Checkout button exists', async function() {
    await ActionsPage.assert_exists(PaigeBrooklynPageLocator.checkoutBtn())
});

// When I hover on Checkout button
When('I hover on Checkout button', async function() {
    await ActionsPage.hover_element(PaigeBrooklynPageLocator.checkoutBtn())
})


// When I click on Checkout button
Then('I click on Checkout button', async function() {
    await ActionsPage.click_element(PaigeBrooklynPageLocator.checkoutBtn());
});

// And I click on Checkout As Guest
When('I click on Checkout As Guest', async function() {
    await ActionsPage.click_element(PaigeBrooklynPageLocator.checkoutAsGuest())
})
