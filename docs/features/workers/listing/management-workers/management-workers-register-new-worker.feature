@testregisternewwork
Feature: Validate the employee master display on the management screen
In order to Validate The display of the employee registration option
as a user admin
I need Not have registered workers

Scenario: Validate screen display
  Given  I'm on the workers' management screen
  Then I should see the message "Olá, para iniciar cadastre um novo trabalhador" and the button "Cadastrar"

Scenario: Access the worker registration screen
  Given  I'm seeing the message "Olá, para iniciar cadastre um novo trabalhador" and the button "Cadastrar"
  When I click on the button "Cadastrar"
  Then The system must open the workers' registration screen in the Personal Data tab
