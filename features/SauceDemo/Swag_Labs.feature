Feature: Sauce Demo Login Page for Testing the eCommerce page

@swaglabs
Scenario: User Logs in the website
    Given I am in Sauce Demo login page
    And I maximize the window
    When I enter "<username>" and "<password>"
    And I click on Login button    
    Then I land on Swag Labs page   
    When I click on Sauce Labs Backpack    
    Then I land on Backpack page
    When I click on Add to Cart for Backpack    
    Then I see the Remove button appears    
    And I click on the Remove button    
    Then I see the Add to Cart for Backpack    
    When I click on Add to Cart for Backpack again    
    Then I see the Shopping Cart Badge appears
    When I click on Shopping Cart Button    
    Then I land on Shopping Cart page
    When I click on Checkout Button    
    Then I land on Checkout page
    And I enter "<firstname>", "<lastname>" and "<zipcode>"
    When I click on Continue Button   
    Then I land on Checkout Overview page
    When I click on Finish Button    
    Then I land on Thank you page
    When I click on Back Home Button
    And I wait for "1" seconds
    Then I land on the Products page
    When I click on the Hamburger button        
    And I wait for "5" seconds        
    When I click on logout button
    And I wait for "5" seconds 
    Then I land on Sauce Demo Login Page again



    Examples:
    | username      | password          |   firstname   |   lastname    |   zipcode |
    | visual_user   | secret_sauce      |   Mike        |   Mortal      |   97077   |
    