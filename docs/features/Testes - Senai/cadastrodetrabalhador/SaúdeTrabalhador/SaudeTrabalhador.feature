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


Scenario: Subscribe an ASO with success
  Given ASO fill fields are enabled
  When  I fill in the fields <TipoAso>, <DataRealizacao>, <Periodicidade>, <Anexo>, <Apto> and <Inapto>
  Then The table Employee health record should close
   Examples:
    |TipoAso            |DataRealizacao|Periodicidade   |Anexo    |Apto|Inapto|
    |Admissional        | 05/06/2017   | 12 Meses       |anexo.jpg| X  |      |
    |Periodico          | 05/06/2017   | 6 Meses        |anexo.jpg| X  |      |
    |Mudança de Função  | 05/06/2017   | 6 Meses        |anexo.jpg| X  |      |
    |Retorno ao Trabalho| 05/06/2017   | Não Possui     |anexo.jpg| X  |      |
    |Demissional        | 05/06/2017   | Não Possui     |anexo.jpg| X  |      |
