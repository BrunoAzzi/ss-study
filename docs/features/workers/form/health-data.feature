Feature: Employee health worker
In order to validate Employee health record
As a user
I need I need to fill in the required data

Background:
Given I already filled out the fields
|TipoSanguineo|Alergias|DoençasPréExistentes|
|   O+        | Rinite       | Diabetes           |
|   A+        |Ovo e pimentão|                    |
|   O-        |              |                    |
And I have clicked to add new ASO

Scenario: Subscribe ASO Admissional with success
  Given I'm looking at the Aso Type field
  When I Inform admission
  Then I should see the fields <DataRealização>, <anexo>, <DataPeriodico>, <Excluir>

  Background:
       Given that I have the ASO Admissional exam expired
        Then I should see the entire ASO registration line in red

Scenario Outline: Subscribe ASO Admissional with success
  Given I am viewing the fill fields <DataRealização>, <anexo>, <DataPeriodico>, <Excluir>
    And I wanted to validate the fill fields
    |Tipo de Aso|DataRealização|Anexo    |DataPeriodico   |Excluir |
    |Admissional|obrigatório   |opcional |obrigatório     |Opcional|
    |Admissional|15/06/2017    |foto.jpg |15/12/2017      |   -    |
    |Admissional|15/06/2017    |   -     |15/12/2017      |   -    |
    When I click on "Salvar e Continuar"
    Then The system saves the registration and closes the health data tab

Scenario: Subscribe ASO Periodic with success
    Given I'm looking at the Aso Type field
    When I Inform admission
    Then I should see the fields <DataRealização>, <Apto>, <Inapto>, <PróximoExame>, <Excluir>

Background:
     Given that I have the ASO periodic exam expired
      Then I should see the entire ASO registration line in red

Scenario Outline: Subscribe ASO Periodic with success
  Given I am viewing the fill fields <DataRealização>, <Apto>, <Inapto>, <PróximoExame>, <Excluir>
    And I wanted to validate the fill fields
    |Tipo de Aso|DataRealização|Anexo    |PróximoExame    |Excluir |
    |Periodico  |obrigatório   |opcional |obrigatório     |Opcional|
    |Periodico  |15/06/2017    |foto.jpg |15/12/2017      |   -    |
    |Periodico  |15/06/2017    |   -     |15/12/2017      |   -    |
    When I click on "Salvar e Continuar"
    Then The system saves the registration and closes the health data tab


  Scenario: Subscribe ASO Change of function with success
    Given I'm looking at the Aso Type field
    When I Inform admission
    Then I should see the fields <DataRealização>, <Apto>, <Inapto>, <DataPeriodico>, <Excluir>

  Background:
     Given that I have the ASO Chagen of Function exam expired
     Then I should see the entire ASO registration line in red

    Scenario Outline: Subscribe ASO Change of function with success
    Given I am viewing the fill fields <DataRealização>, <Apto>, <Inapto>, <DataPeriodico>, <Excluir>
    And I wanted to validate the fill fields
    |Tipo de Aso        |DataRealização          |Anexo    |DataPeriodico     |Excluir |
    |Mudança de Função  |obrigatório             |opcional |obrigatório       |Opcional|
    |Mudança de Função  |15/06/2017              |foto.jpg |15/12/2017        |   -    |
    |Mudança de Função  |15/06/2017              |   -     |15/12/2017        |   -    |
    When I click on "Salvar e Continuar"
    Then The system saves the registration and closes the health data tab

  Scenario: Subscribe ASO back to work with success
    Given I'm looking at the Aso Type field
    When I Inform admission
    Then I should see the fields <DataRealização>, <Apto>, <Inapto>, <DataPeriodico>, <Excluir>

    Background:
       Given that I have the ASO back to work exam expired
       Then I should see the entire ASO registration line in red

  Scenario Outline: Subscribe ASO back to work with success
    Given I am viewing the fill fields <DataRealização>, <Apto>, <Inapto>, <DataPeriodico>, <Excluir>
    And I wanted to validate the fill fields
    |Tipo de Aso            |DataRealização|Anexo    |DataPeriodico     |Excluir |
    |Retorno ao Trabalho    |obrigatório   |opcional |obrigatório       |Opcional|
    |Retorno ao Trabalho    |15/06/2017    |foto.jpg |15/12/2017        |   -
    |Retorno ao Trabalho    |15/06/2017    |   -     |15/12/2017        |   -    |
    When I click on "Salvar e Continuar"
    Then The system saves the registration and closes the health data tab

  Scenario: Subscribe ASO Dismissal with success
    Given I'm looking at the Aso Type field
    When I Inform admission
    Then I should see the fields <DataRealização>, <anexo>, <DataDemissao>, <Excluir>

    Background:
       Given that I have the ASO Dismissal exam expired
       Then I should see the entire ASO registration line in red

  Scenario Outline: Subscribe ASO Dismissal with success
    Given I am viewing the fill fields <DataRealização>, <Apto>, <Inapto>, <DataPeriodico>, <Excluir>
    And I wanted to validate the fill fields
    |Tipo de Aso    |DataRealização|Anexo    |DataPeriodico     |Excluir |
    |Demissional    |obrigatório   |opcional |obrigatório       |Opcional|
    |Demissional    |15/06/2017    |foto.jpg |15/12/2017        |   -
    |Demissional    |15/06/2017    |   -     |15/12/2017        |   -    |
    When I click on "Salvar e Continuar"
    Then The system saves the registration and closes the health data tab
