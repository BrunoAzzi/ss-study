@TOCODE
Feature: Password recovery
  In order to regain access to the system
  As a user that lost his password
  I want to create a new password

  Scenario: Send recover link action
    Given the following users exist:
      | email                  | password |
      | john.doe@example.com   | 123123   |
    And I am not authenticated
    And I accessed the recovery password url
    When I type my 'john.doe@example.com' on the field
    And sumbit the form
    Then I am informed to check my e-mail for the recovery link
    And I receive an e-mail with the recovery link

  Scenario: Recover password
    Given I've received an e-mail with the recovery link
    When I click on the link
    And type a new password two times
    Then I gain access to the system
