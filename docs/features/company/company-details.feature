@TOCODE
Feature: Company's details
  In order maintain my company information updated
  As a user
  I want to manage the details of my company

  Scenario: Submitting the company details correctly
    Given I am at a my company form page
    When I fill the data form with the following data:
      | type    | description            | cnpj                | cnae                                 | social_name             | fantasy_name      | cep       | address             | neighborhood | city          | email                         | phone         | fax           | url                         |
      | Serviço | Manutenção de máquinas | 144.214.123/0001-10 | Desenvolvimento de obras lorem ipsum | CONSTRUTORA DIMAS LTDA. | DIMAS CONSTRUTORA | 88025-400 | R. Joaquim Cost, 22 | Coqueiros    | Florianópolis | dimas@construtoradimas.com.br | (48)3253-2525 | (48)3253-2525 | www.construtoradimas.com.br |
    And submit the data form
    Then I see a success message

  Scenario: Changing the name of the company
    Given I am at my company form page
    When I fill the form correctly
    And I change the fantasy_name field to "Koerish"
    Then I see the letter of the sidebar change to "K"

  Background:
    Given I am logged in Safety's system
    And I am in company registration screen
    And I select in first accordion item called "Dados da empresa"

    Scenario: Get informations from CNPJ
      Given the following "CNPJ" is valid and exists:
        | cnpj                 |
        | 000.000.000.00       |
      When I type this in CPNJ field
      And I submit, pressing the magnifying glass icon
      Then I should see automatically populate the informations: "Nome Social", "Nome Fantasia", "CNAE",
                                                                  "Descricao do CNAE" and "Endereco".

    Scenario: Get informations from CEP
      Given the following "CEP" is valid and exists:
        | cep            |
        | 00.000.000     |
      When I type this in CEP field
      And I submit, pressing the magnifying glass icon
      Then I should see automatically populate all informations of address.

    Scenario: Upload a logo image
        Given I have a logo image to company
        When I select the box with text: "Insira o logo da empresa"
        And I select a image from my computer
        Then the image will be uploaded
        And I should see that in box

    Scenario: Submit company details
        Given that the fields
        When a
        Then b
