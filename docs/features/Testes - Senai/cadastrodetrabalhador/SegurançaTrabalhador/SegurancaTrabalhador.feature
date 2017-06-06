@TestSegurancaTrabalhador
Feature: Validate the worker's safety record
  In order to Register a job security information
  As a user
  I need Fill in the required fields

Background: Have a registered user

Scenario: Register a job security information with succes
   Given  I am on the job security record screen
   When I fill in the fields <TrabalhadorCipeiro>, <CargoNaCipa>, <PeriodoDoMandato> and <TrabalhadorBrigadista>
   And I click on "Salvar e Continuar"
   Then The system records the information and closes the job security tab
    Examples:
    |TrabalhadorCipeiro|CargoNaCipa     |PeriodoDoMandato        |TrabalhadorBrigadista|
    |       Sim        | Membro Suplente| 05/06/2017 a 05/06/2018|           Sim       |
    |       Sim        | Membro Suplente| 05/06/2017 a 05/06/2018|           Não       |

Scenario: Register a job security information with succes
  Given  I am on the job security record screen
  When I fill in the field <TrabalhadorCipeiro>
  Then The system must block the fields <CargoNaCipa>, <PeriodoDoMandato> to fill
    Examples:
    |TrabalhadorCipeiro|CargoNaCipa      |PeriodoDoMandato        |TrabalhadorBrigadista|
    |       Não        | Blocked         | Blocked                |          Sim        |
    |       Não        | Blocked         | Blocked                |          Não        |
