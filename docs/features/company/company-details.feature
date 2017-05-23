Feature: Registration of Company Details
  In order to get the details of the details of company Safety's Costumer
  I must register the informations in a form

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
      When 
      Then 
