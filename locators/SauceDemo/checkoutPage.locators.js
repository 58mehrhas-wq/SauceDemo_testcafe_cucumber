const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function chkoutInfo() {
    return select('.title').withText('Checkout: Your Information')
}

function firstname() {
    return select('#first-name')
}

function lastname() {
    return select('#last-name')
}

function zipcode() {
    return select('#postal-code')
}

function continueBtn() {
    return select('#continue')
}

function cancelBtn() {
    return select('#cancel')
}

async function checkoutEntry(firstname, lastname, zipcode) {
    await ActionsPage.type_text(LoginPageLocator.firstname(), firstname)
    await ActionsPage.type_text(LoginPageLocator.lastname(), lastname)
    await ActionPage.type_text(LoginPageLocator.zipcode(), zipcode)
}

module.exports = {
    chkoutInfo,
    firstname,
    lastname,
    zipcode,
    continueBtn,
    cancelBtn,
    checkoutEntry
};