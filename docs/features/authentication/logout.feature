@PASSING
Feature: Logout
  In order not to let other people use the system as myself
  As a user
  I must logout of the system

  Scenario: Logout of the system
    Given I am logged to the system
    When I perform logoff
    Then I should be redirected to the login page
    And I cannot access most pages of the system
