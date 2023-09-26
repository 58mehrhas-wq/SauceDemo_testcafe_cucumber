const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function brooklynPageTile() {
    return select('h1').withText('Brookly Crop - Black Willow')
}

function size24() {
    return select('a').withText('24')
}

function inStock() {
    return select('span').withText('In Stock')
}

function size27() {
    return select('a').withText('27')
}

function soldOut() {
    return select('span').withText('Sold Out')
}

function size32() {
    return select('a').withText('32')
}

function addToShoppingBag() {
    return select('button').withText('ADD TO SHOPPING BAG')
}

function goodNewsShippingMsg() {
    return select('div').withText('Good news! Free U.S. Shipping & Returns')
}

function checkoutBtn() {
    return select('div.pg-navFlyout_column div.bag-flyout-backdrop div.bag-flyout div.bag-flyout-footer div:nth-child(3) > button:nth-child(1)')
}

function checkoutItems() {
    return select('app-bag-product-item:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)')
}

function estimatedTotal() {
    return select('.pg-myBagOrderSummary_detailsLarge')
}

function checkoutAsGuest() {
    return select('div.pg-myBagOrderSummary_buttons.pg-myBagOrderSummary_section > a:nth-child(2)')
}

module.exports = {
    brooklynPageTile,
    size24,
    inStock,
    size27,
    soldOut,
    size32,
    addToShoppingBag,
    goodNewsShippingMsg,
    checkoutItems,
    estimatedTotal,
    checkoutBtn,
    checkoutAsGuest

};