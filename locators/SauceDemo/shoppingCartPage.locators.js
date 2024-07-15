const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function yourCartTitle() {
    return select('.title')
}

function checkoutBtn() {
    return select('#checkout')
}

function continueShoppingBtn() {
    return select('#continue-shopping')
}

module.exports = {
    yourCartTitle,
    checkoutBtn,
    continueShoppingBtn  
};