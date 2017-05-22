Feature: Registration of Company Details
  In order to get the details of the details of company Safety's Costumer
  I must register the informations in a form

  Background: 
    Given I am logged in Safety's system
    And I am in company registration screen
    And I select in first accordion item called "Dados da empresa"
    
  Scenario Outline: Get informations from CNPJ
    Given the <cnpj> exist and is valid
    When I type the <cnpj> in CPNJ field
    And I submit, press on the magnifying glass icon
    Then I should see automatically populate the informations: <social_name>, <fantasy_name>, <cnae>, <cnae_description> and <address>.

    Examples:
      | cnpj                 | social_name    | fantasy_name    | cnae           | cnae_description   | address     |
      | 000.000.000.00       |                |                 |                |                    |             |

  Scenario: Upload a logo image
      Given I have a logo image to company
      When I select the box with text: "Insira o logo da empresa"
      And I select a image from my computer 
      Then the image will be uploaded
      And I should see that in box 