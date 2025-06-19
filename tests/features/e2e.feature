@e2e
Feature: End-to-End Purchase Flow
  As a user, I want to complete a purchase from login to order confirmation.

  @purchase
  Scenario: Complete purchase with valid credentials
    Given I am on the SauceDemo login page
    When I login with valid credentials
    And I add the first item to the cart
    And I proceed to checkout
    And I enter checkout information "John" "Doe" "12345"
    And I finish the order
    Then I should see the order confirmation
    And the checkout complete page header should be visible 