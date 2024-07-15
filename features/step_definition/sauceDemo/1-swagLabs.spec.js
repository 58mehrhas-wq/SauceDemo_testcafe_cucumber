const ActionsPage = require('../../../pages/actions.pages.js');
const { When, Then } = require('cucumber');
const SauceDemoHomePageLocator = require('../../../locators/SauceDemo/sauceDemo_homePage.locators.js');
const ShoppingCartPage = require('../../../locators/SauceDemo/shoppingCartPage.locators.js');
const CheckoutPage = require('../../../locators/SauceDemo/checkoutPage.locators.js')
const CheckoutOverviewPage = require('../../../locators/SauceDemo/checkoutOverviewPage.locatore.js')
const ThankYouPage = require('../../../locators/SauceDemo/thankYouPage.locator.js')
const LoginPage = require('../login.spec.js');
const ProductsPage = require('../../../locators/SauceDemo/productsPage.locators.js')
const assert = require('assert');
const loginLocators = require('../../../locators/login.locators.js');
const timestamp = Math.round(new Date().getTime() / 1000);


Then('I land on Swag Labs page', async function() {
    await ActionsPage.assert_exists(SauceDemoHomePageLocator.HomePage());
});

When('I click on Sauce Labs Backpack', async function() {
    await ActionsPage.click_element(SauceDemoHomePageLocator.SLBgpk());
});

Then('I land on Backpack page', async function() {
    await ActionsPage.assert_exists(SauceDemoHomePageLocator.BackpackPage())
})

When('I click on Add to Cart for Backpack', async function() {
    await ActionsPage.click_element(SauceDemoHomePageLocator.SLBgPkAddToCart());
});

Then('I see the Remove button appears', async function() {
    await ActionsPage.assert_exists(SauceDemoHomePageLocator.SLBgPkRemoveBtn());
});

When('I click on the Remove button', async function() {
    await ActionsPage.click_element(SauceDemoHomePageLocator.SLBgPkRemoveBtn());
});

Then('I see the Add to Cart for Backpack', async function() {
    await ActionsPage.assert_exists(SauceDemoHomePageLocator.SLBgPkAddToCart());
});

When('I click on Add to Cart for Backpack again', async function() {
    await ActionsPage.click_element(SauceDemoHomePageLocator.SLBgPkAddToCart());
});

Then('I see the Shopping Cart Badge appears', async function() {
    await ActionsPage.assert_exists(SauceDemoHomePageLocator.cartBadge());
});

When('I click on Shopping Cart Button', async function() {
    await ActionsPage.click_element(SauceDemoHomePageLocator.shoppinCartBtn());
});

Then('I land on Shopping Cart page', async function() {
    await ActionsPage.assert_exists(ShoppingCartPage.yourCartTitle());
});

When('I click on Checkout Button', async function() {
    await ActionsPage.click_element(ShoppingCartPage.checkoutBtn());
});

Then('I land on Checkout page', async function() {
    await ActionsPage.assert_exists(CheckoutPage.chkoutInfo());
});

When('I enter {string}, {string} and {string}', async function(firstname, lastname, zipcode) {
    await ActionsPage.click_element(CheckoutPage.firstname());
    await ActionsPage.press_keys(firstname);
    await ActionsPage.click_element(CheckoutPage.lastname());
    await ActionsPage.press_keys(lastname);
    await ActionsPage.click_element(CheckoutPage.zipcode());
    await ActionsPage.press_keys(zipcode);
    
});

When('I click on Continue Button', async function() {
    await ActionsPage.click_element(CheckoutPage.continueBtn());
});

Then('I land on Checkout Overview page', async function() {
    await ActionsPage.assert_exists(CheckoutOverviewPage.checkoutOverviewTitle());
});

When('I click on Finish Button', async function() {
    await ActionsPage.click_element(CheckoutOverviewPage.finishBtn());
});

Then('I land on Thank you page', async function() {
    await ActionsPage.assert_exists(ThankYouPage.thankyouNote());
})

When('I click on Back Home Button', async function() {
    await ActionsPage.click_element(ThankYouPage.backHomeBtn());
});


Then('I land on the Products page', async function() {
    await ActionsPage.assert_exists(ProductsPage.productsTitlePage());
});

When('I click on the Hamburger button', async function() {
    await ActionsPage.click_element(ProductsPage.hamburgerBtn());
});

When('I click on logout button', async function() {
    await ActionsPage.click_element(ProductsPage.logoutBtn());
});

Then('I land on Sauce Demo Login Page again', async function() {
    await ActionsPage.assert_exists(SauceDemoHomePageLocator.loginLogo())
})