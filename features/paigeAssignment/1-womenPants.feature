Feature: Paige for Women Pants Example Feature

@women_pants
Scenario: User Buys Women Pants Scenario
    Given I am in Paige home Page
    When I close the popup
    And I wait for "1" seconds    
    And I maximize the window
    And I assert the PAIGE logo appears
    When  I hover on Women tab
    And I wait for "1" seconds
    Then I select Pants option
    And I assert the WOMEN PANTS title appears
    When I click into the search field
    And I wait for "1" seconds
    Then I search for "<pantsItem>"    
    # And I wait for "10" seconds
    And I click on Brooklyn button



    Examples:
    | pantsItem                     |
    | Brooklyn Crop - Black Willow  |
    