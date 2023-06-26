const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function closePopup() {
    // return 'a[aria-label$="close"]' 
    return 'a[class="ltkpopup-close"]'   
}

function paigeBtn() {
    // return 'app-header-default[class="desktop-sticky-header sticky-unstuck sticky-top"] img[alt="PAIGE"]'
    return select('a').withText('PAIGE')
}

function womenTab() {
    return select('span').withText('WOMEN')
}

function pantsOption() {
    return select('span').withText('Pants')
}


module.exports = {
    closePopup,
    paigeBtn,
    womenTab,
    pantsOption
};