@testTelaInicial
Feature: Validation of the main screen of the works register without registered works
  In order to registered a new work
  As a user
  I need to click the register button

  Background: Don't have registered work

  Scenario: Validate work registry
    Given  Since I'm on the works screen
      When  I click on button "Cadastrar"
      Then The system must display the works registration screen


   Scenario: Validate the help of the system
     Given  Since I'm on the works screen
     When   I click on button "Ajuda"
     Then   The system should display an email for the user to submit their question
