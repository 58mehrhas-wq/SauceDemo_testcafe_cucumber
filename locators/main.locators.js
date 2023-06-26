    function main_title() {
        return 'scorpion-dashboard-title > div > h1';
    }

    function settings_button() {
        return '[data-cy="user-menu"] > button'
    }

    function settings_options() {
        return '.label'
    }

module.exports = {
    main_title: main_title,
    settings_button: settings_button,
    settings_options: settings_options
};
