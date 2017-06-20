@testTelaInicial
Feature: Exhibition of the works in the system
  In order to View the works registered
  As a user
  I need to be on the screen.

  Background: Don't have registered work

    Scenario: Validate work registry
      Given  Since I'm on the works screen
        When  I click on button "Cadastrar"
        Then The system must display the works registration screen


     Scenario: Validate the help of the system
       Given  Since I'm on the works screen
       When   I click on button "Ajuda"
       Then   The system should display an email for the user to submit their question


   Background: Have works registered in the system

       Scenario: Edit one work registered
         Given   I am viewing the works registered
         When    I have clicked on button for edit the work registered
         Then    The system must redirect me to the selected work register screen

       Scenario: registered a new work
         Given   I have clicked on button for registered a new work
         Then    The system should redirect me to the works registration screen

       Scenario: Search a work
         Given   I am viewing the works registered
           And   I have clicked on the search field
           And   Has informed the name of a work
           When  I click search
           Then  The system must display the registered work

       Scenario: Job overview
         Given  I am viewing the works registered
          When   I have clicked on the icon of work
         Then   I must be redirected to the job overview screen

       Scenario: Filter works status
         Given  I am viewing the works registered
           When   I click on "Em Andamento"
         Then   The system should display only works in progress

       Scenario: Filter works status
         Given I am viewing the works registered
          When  I click on "Paralizadas"
         Then  The system should display only the paralyzed works

       Scenario: Filter works status
         Given I am viewing the works registered
          When  I click on "Finalizadas"
         Then  The system should display only completed works
