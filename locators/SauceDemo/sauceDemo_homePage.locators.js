const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function HomePage() {
    return select('div').withText('Swag Labs')
}

function SLBgpk() {
    return select("a[id='item_4_title_link'] div[class='inventory_item_name ']")
}

function BackpackPage() {
    return select('.inventory_details_desc.large_size')
}

function SLBgPkAddToCart() {
    return select('#add-to-cart')
}

function SLBgPkATCText() {
    return select('button').withText('Add to cart')
}

function SLBgPkRemoveBtn() {
    return select('#remove')
}

function cartBadge() {
    return select('.shopping_cart_badge')
}

function shoppinCartBtn() {
    return select('.shopping_cart_link')
}

function loginLogo() {
    return select('.login_logo')
}


module.exports = {
    HomePage,
    SLBgpk,
    BackpackPage,
    SLBgPkAddToCart,
    SLBgPkATCText,
    SLBgPkRemoveBtn,
    cartBadge,
    shoppinCartBtn,
    loginLogo
};