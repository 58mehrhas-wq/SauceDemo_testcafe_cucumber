const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function productsTitlePage() {
    return select('.title')
}

function hamburgerBtn() {
    return select('#react-burger-menu-btn')
}

function logoutBtn() {
    return select('[data-test=logout-sidebar-link]')
}

module.exports= {
    productsTitlePage,
    hamburgerBtn,
    logoutBtn
}