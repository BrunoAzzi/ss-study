@TOCODE
Feature: Suppliers list
  In order to manage suppliers across the system
  As a user
  I want to view the suppliers of the system

  Background:
    Given the following companies exist:
      | name                   | fantasy_name     | cnpj                | responsible | phone         | created_at |
      | Sensorama Ltda ME      | Sensorama Design | 091.739.112/0001-69 | Mariana     | (48)987234567 | 22/05/2017 |
      | Pilpei Tecnologia Ltda | Plyom            | 17.670.965/0001-94  | Tiago       | (48)3028-2360 | 23/05/2017 |

    Scenario: Viewing the companies as a list
      Given I can see the main menu
      When I click the company icon
      Then I can see a list containing 2 items

    Scenario: Searching companies by name
      Given I am at the list of companies page
      When I query for "Senso"
      Then I can see a list containing 1 item

    Scenario: Ordering companies
      Given I am at the list of companies page
      When click on the ordering selectbox
      And click on "ÚLTIMOS CADASTRADOS"
      Then I can see a list containing 1 item

    Scenario: Editing a company
      Given I am at the list of companies page
      When I click on the first pencil icon
      Then I see the company form page with Sensorama data filled

    Scenario: Removing a company
      Given I am at the list of companies page
      When I select the first company
      And click on the remove button
      Then I can see a list containing 1 item

  Scenario: Adding a company
    Given I am at the list of companies page
    When I click on the add button
    Then I see the company form page with no data filled
