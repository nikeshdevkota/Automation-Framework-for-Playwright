Feature: SauceDemo E2E Order Flow

  Scenario: User logs in, adds item to cart, checks out, and completes order
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    And I add the first item to the cart
    And I proceed to checkout
    And I enter checkout information "John" "Doe" "12345"
    And I finish the order
    Then I should see the order confirmation 