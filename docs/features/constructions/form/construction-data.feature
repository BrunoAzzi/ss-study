@testCadastrodaObra
Feature: Validation of works registration screen
  In order to registration one work
  As a user
  I need to register the necessary data

  Scenario Outline: Validation of the registration of a work with success
    Given  That I am on the work registry screen
      When  I Inform in the fields <Nome do Empreendimento>,
                                   <CEP>,
                                   <CEI>,
                                   <Status da Obra>
      And I click on the button "Salvar e Continuar"
      Then The work register tab should close
      Examples:
        |Nome do Empreendimento|  CEP     |     CEI       |Status da Obra|
        |     Obra teste 1     |88058327  |  anexo.pdf    |  Em Execução |
        |     Obra teste 2     |88058465  |  anexo.png    |  Finalizada  |
        |    Obra teste  3     |88058467  |  anexo.jpg    |  Paralizada  |


    Scenario Outline: Fail to Validation of the registration of a work
        When I Inform in the fields <Nome do Empreendimento>,
                                    <CEP>,
                                    <CEI>

        And I submit
        Then I should see an error message
        Examples:
          |Nome do Empreendimento |  CEP     |     CEI       |Status da Obra|
          |        1234           |878/7787  |  anexo.css    |    vazio     |
          |        vazio          |  vazio   |    vazio      |    vazio     |
          |        vazio          | 88058465 |  anexo.pdf    |   Em Execução|
          |        Ob             |  88058465|   anexo.jpg   |  Em Execução |
          |        Obra 1         |  vazio   |   anexo.jpg   |   Finalizada |
          |        Obra 1         |  880     |   anexo.jpg   |   Finalizada |
          |        Obra 1         |  88058465|   vazio       |   Paralizada |
          |        Obra 1         |  88058465|   anexo.jpg   |   Vazio      |


    Scenario Outline: Blocking fields when typing characters that are not accepted
            When I Inform in the fields <Nome do Empreendimento>,
                                        <CEP>,
                                        <CEI>,
            Then Fields must be locked for typing
          |Nome do Empreendimento |  CEP     |     CEI         |
          |        !@#@#          |   abc    |    @#$##        |
