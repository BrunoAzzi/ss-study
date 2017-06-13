@testCadastroeNovaObraTrabalhadores
Feature: Work register, selection of workers
    In order to have workers in the work
    As a user
    I need select workers

  Background:
    Have registered workers and not having registered in the system the worker Carlos


Scenario: Search and select a worker by NAME
  Given That I enter in the search field the name of a registered employee
    And The system display the worker
    And I click on button for to send worker for work
    And I see the worker registered in the work
    And I click button "Save and Continue"
  Then The system saves the selected worker in the work and closes the registration tab

Scenario: Search and select a worker by CPF
  Given That I enter in the search field the cpf of a registered employee
    And The system display the worker
    And I click on button for to send worker for work
    And I see the worker registered in the work
    And I click button "Save and Continue"
  Then The system saves the selected worker in the work and closes the registration tab

Scenario: Search and select a worker by FUNCTION
  Given that I enter in the search field the function of a registered employee
    And the system display the worker
    And I click on button for to send worker for work
    And I see the worker registered in the work
    And I click button "Save and Continue"
  Then The system saves the selected worker in the work and closes the registration tab

Scenario: Select more than one worker to link the work
  Given I type the name "João"
    And The system returns more than one worker
    And I click the button to select all workers
    And I see the worker registered in the work
    And I click button "Save and Continue"
  Then The system saves the selected worker in the work and closes the registration tab

  Scenario: Select more than one worker to link the work
    Given I type the function "Pedreiro"
      And The system returns more than one worker with the function
      And I click the button to select all workers
      And I see the worker registered in the work
      And I click button "Save and Continue"
    Then The system saves the selected worker in the work and closes the registration tab

  Scenario: Search for a nonexistent worker
    Given That I type the name "Carlos"
    Then  The system should display a message stating that the worker is not registered
