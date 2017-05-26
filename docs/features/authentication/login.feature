@TOCODE
Feature: Login
  In order to gain access to the system
  As a user
  I must login using e-mail and password

  Scenario Outline: Login to the system
    Given the following users exist:
      | email                  | password |
      | john.doe@example.com   | 123123   |
    And I am not authenticated
    And I access the home system url
    When I type <email> on email field
    And I type <password> on password field
    And I submit
    Then I should see <outcome>

    Examples:
      | email                 | password | outcome       |
      | john.doe@example.com  | 123123   | login success |
      | john.doe@example.com  | 124124   | login error   |
      | john.does@example.com | 123123   | login error   |
