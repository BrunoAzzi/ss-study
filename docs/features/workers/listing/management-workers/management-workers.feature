@testmanagmentwork

Feature: Validation of the employee management screen
In order to Validate filters and screen views
as a user admin
I need Have registered workers

Backgroud: Own employees and registered third parties
  Given The worker is third
  Then I should see on the registration line the icon indicating that the worker is third

Scenario: Screen display
   Given I'm on the workers' management screen
    Then I should see the tab indicating the next maturities, the filters for selection of own and third-party workers,
          alphabetic sorting filter, worker selection button by function,
          individual worker selection icon, individual edit icon and the button for registered a new worker.

Scenario: Select own workers
    Given I'm on the workers' management screen
    When I click on the filter for select own workers
    Then I see the filter for select own workers selected and The system displays only the own workers

Scenario: Select third-party workers
   Given I'm on the workers' management screen
   When I click on the filter for select third-party workers
   Then  I see the filter for select third-party selected and The system displays only the third-party workers

Scenario: Filter in alphabetic order the workers
   Given I'm on the workers management screen
   When I click on alphabetic sorting filter
   Then The system displays all the workers in alphabetic sorting

Scenario Outline: Get a worker through the fields nome, função ou empresa terceira
          Given I'm on the workers management screen
          When  I input on the fields <nome>, <função> ou <empresaTerceira>
          Then I should get results referring to my research
        Examples:
              |nome|função    |empresaTerceira  |
              |João|     -    |       -         |
              | -  |  Pedreiro|       -         |
              | -  |     -    |   ABC Pedreiros |

Scenario: Filter by active workers
    Given I'm on the workers magement screen
    When  I click on the button "Filtrar Pedreiros Ativos"
    Then I must see only the active workers in that construction

Scenario: Filter by inactive workers
    Given I'm on the workers management screen
    When  I click on the button "Filtrar Pedreiros Inativos"
    Then I should see the lines of the workers with a dark gray and only the inactive workers

Scenario: Edit the registration of a worker
   Given I'm on the workers management screen
   When  I click on "Edit" in the line of the worker
   Then The system must open the workers registration screen

Scenario: Validate access to workers' registration screen
   Given I'm on the workers management screen
   When I clic on the button for registered a new workers
   Then The system must open the workers' registration screen in the Personal Data tab
