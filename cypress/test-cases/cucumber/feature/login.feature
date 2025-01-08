Feature: Login

  Scenario: Login success with valid username and password
    Given I am on the login page
    When I login with username "admin" and password "password123"
    Then System will show Dashboard page
