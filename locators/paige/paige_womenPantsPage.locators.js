const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function womenPantsTitle() {
    return select('h1').withText("WOMEN'S PANTS")
}

function searchField() {
    return select('app-header-default > div > app-header-search > div > form > div > input')
}

function brooklynBtn() {
    return select('img[alt="Gemma - Black Fog Luxe Coating"]')
}



module.exports = {
    womenPantsTitle,
    searchField,
    brooklynBtn,   
};