@TestHabilitacoes
Feature: Register an authorization
In order to Register an authorization
As a user
I need I need to fill in the required fields

Background: Have clicked the button "Nova Habilitação"

  Scenario: Validation in the registration with success
    Given I'm on the qualification registration screen
    When I fill in the fields <habilitacao>, <data realizacao>, <Periodicidade> <apto>, <inapto> and <anexo>
    And I click on "Salvar e Continuar"
    Then I view the expired icon and The system registers the enable and closes the tab
    Examples:
    |HABILITACAO              |DATA REALIZACAO| PERIODICIDADE| APTO| INAPTO|ANEXO      |
    |nr 10 - Básico           | 05/06/2016    | 12 meses     |  X  |       |arquivo.jpg|


  Scenario: Validation in the registration with success
    Given I'm on the qualification registration screen
    When I fill in the fields <habilitacao>, <data realizacao>, <Periodicidade> <apto>, <inapto> and <anexo>
    And I click on "Salvar e Continuar"
    Then I view the valid periodicity icon and The system registers the enable and closes the tab
    Examples:
    |HABILITACAO              |DATA REALIZACAO| PERIODICIDADE| APTO| INAPTO|ANEXO      |
    |nr 10 - Básico           | 05/06/2017    | 12 meses     |  X  |       |arquivo.jpg|
