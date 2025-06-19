@login
Feature: Login
  As a user, I want to log in with valid credentials and see errors with invalid credentials.

  @positive
  Scenario: Login with valid credentials
    Given I am on the SauceDemo login page
    When I login with valid credentials
    Then I should be redirected to the inventory page
    And the inventory page header should be visible

  @negative
  Scenario Outline: Login with invalid credentials
    Given I am on the SauceDemo login page
    When I login with invalid credentials set <index>
    Then I should see a login error message
    And the login page header should be visible

    Examples:
      | index |
      | 0     |
      | 1     |
      | 2     |
      | 3     |
      | 4     | 