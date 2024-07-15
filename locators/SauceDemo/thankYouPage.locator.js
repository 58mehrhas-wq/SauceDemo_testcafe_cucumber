const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function thankyouNote() {
    return select('.complete-header').withText('Thank you for your order!')
}

function backHomeBtn() {
    return select('#back-to-products')
}

function productTitlePage() {
    return select('.title').withText('Products')
}


module.exports = {

    thankyouNote,
    backHomeBtn,
    productTitlePage

}