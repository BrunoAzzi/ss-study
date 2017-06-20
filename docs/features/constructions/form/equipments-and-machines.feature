@testCadastrodeMaquinaseEquipamentos
Feature: Register machines and equipment
  In order to register
  As a user
  I want Fill in the required fieldss

    Scenario: Add a new category with success
      Given I stay in the register machines and equipment screen
        When I select one category
        Then Fields are fill-in

   Scenario: Add a new equipment with success
      Given I stay in the register machines and equipment screen
       And I select one <Tipo de Equipamento>
       When I type one <Identificação>
       And click on "Salvar e Continuar"
       Then The system must register equipment and close the register of machines and equipment

  Scenario: Add a new equipment with manutention with success
     Given  That I am inside a new equipment register
       And  I select one <Tipo de Equipamento>
       And I type <Identificação>
       When I click on <Manutenção>
       And Input last manutention
       Then The system calculate automatic the new periodicity

  Scenario: Delete category with success
    Given  That I am inside a new equipment register
     When  I click on the button <Excluir>
     Then  The system displays a message to confirm deletion of the category
     And I click on "Yes"
     Then The category are deleted of the system

   Scenario: Delete created device with success
     Given  That I am inside a new equipment register
      When  I click on the button <Excluir> Next to the equipment
      Then  The system displays a message to confirm deletion of the equipment
      And I click on "Yes"
      Then The equipment are deleted of the system
