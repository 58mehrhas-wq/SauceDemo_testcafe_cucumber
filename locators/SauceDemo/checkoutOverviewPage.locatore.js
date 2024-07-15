const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function checkoutOverviewTitle() {
    return select('.title').withText('Checkout: Overview')
}

function finishBtn() {
    return select('#finish')
}

module.exports = {
    checkoutOverviewTitle,
    finishBtn


}
