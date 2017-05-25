@TOCODE
Feature: Company's contact
  In order maintain my company information updated
  As a user
  I want to manage the contact of my company

  Scenario: Submitting the contact form correcly
    Given I am at a company form page with filled company data
    When I fill the contact of the company form with the following data:
      | name              | position | phone         | fax           | email                         |
      | João Carlos Alves | Diretor  | (48)3253-2525 | (48)3253-2525 | dimas@construtoradimas.com.br |
    And submit the contact form
    Then I see a success message