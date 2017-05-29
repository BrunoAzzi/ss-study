@TOCODE
Feature: Login
  In order to gain access to the system
  As a user
  I must login using e-mail and password

  Background:
    Given the following users exist:
      | email                  | password |
      | john.doe@example.com   | 123123   |
    And I am not authenticated
    And I access the home system url
    When I type <email> on email field
    And I type <password> on password field
    And I submit
    Then I should see <outcome>

    Scenario Outline: Login to the system with success
      When I fill the login form with: <email>, <password>
      And I submit
      Then I should see a success message
      And I am redirected to the dashboard
      Examples:
        | email                 | password |
        | john.doe@example.com  | 123123   |
        | john.Doe@example.com  | 123123   |
        | johH.DOES@EXAmple.com | 123123   |

    Scenario Outline: Fail to login to the system
      When I fill the login form with: <email>, <password>
      And I submit
      Then I should see an error message
      Examples:
        | email                   | password |
        | john.doe@example.com    | 123124   |
        | john.doe@example.com.br | 123123   |
        | johH.DOES@EXAmple.com   |          |
