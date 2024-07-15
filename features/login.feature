Feature: Login

    @login
    Scenario: User_Login_E2E_Scenario
        Given I am in Sauce Demo login page
        When I enter "<username>" and "<password>"
        And I click on Login button
        And I wait for "2" seconds

        Examples:
        |   username    |   password        |
        |   visual_user |   secret_sauce    |
