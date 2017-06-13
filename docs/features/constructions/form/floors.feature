@testCadastrodePlanta
Feature: Plant registration
  In order to Register a plant in the system
  As a user
  I need send a file and enter the required fields

  Scenario: Add a sector and a plant with success
    Given I'm on the plant registration screen
     And  I have selected a sector
     And I add a plant to the screen
     When Fields <NomePavivmento> and <Sigla>  must be enabled for editing
     And I inform in the fields <NomePavivmento> and <Sigla>
     And I click on the button "Salvar e Continuar"
     Then The system registers the plants and closes the plant registration tab

     Examples:
       |Nome Pavimento| Sigla |
       |Primeiro Andar|   1   |
       |Térreo        |   t   |


   Scenario: fail to Add a sector and a plant
    Given I'm on the plant registration screen
      And  I have selected a sector
      And I add a plant to the screen
      When Fields <NomePavivmento> and <Sigla>  must be enabled for editing
      And I inform in the fields <NomePavivmento> and <Sigla>
      And I click on the button "Salvar e Continuar"
      Then I should see an error message

     Examples:
      |Nome Pavimento   | Sigla     |
      |Primeiro Andar   |   vazio   |
      |   Vazio         |   t       |
      |   Vazio         |  vazio    |


  Scenario Outline: Block the typing of the fields when characters are not accepted
    Given I'm on the plant registration screen
      When I Inform in the fields <NomePavivmento> and <Sigla>
      Then Fields must be locked for typing
     Examples:
       |Nome Pavimento| Sigla    |
       |@#$$#         |   @#$#   |


  Scenario: Exclude plant with success
     Given I'm on the plant registration screen
      When  I click the <x> to delete the plant
      Then The system should display a message asking if I really want to delete that plant
      And I click on "Yes"
      Then the plant are delete of the system

Scenario: Exclude sector
    Given I'm on the plant registration screen
     When  I click the <x> to delete the sector
     Then The system should display a message asking if I really wnat to delete that sector
     And I click on "Yes"
     Then The sector are delete of the system
