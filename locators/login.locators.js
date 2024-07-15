
function username() {
    return "#user-name"
}

function password() {
    return "#password"
}

function login_button() {
    return "#login-button"
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

module.exports = {
    username: username,
    password: password,
    login_button: login_button,
    firstname: firstname,
    lastname: lastname,
    zipcode: zipcode

};
