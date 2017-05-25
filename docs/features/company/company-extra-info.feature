@TOCODE
Feature: Company's extra information
  In order maintain my company information updated
  As a user
  I want to manage the extra information of my company

  Scenario: Submitting the extra information form correcly
    Given I am at a company form page with filled company data
    When I fill the extra information form with the following data:
      | has_sesmt | has_cipa | members_number | cipa_designated |
      | false     | false    | 10             | false           |
    And submit the extra information form
    Then I see a success message