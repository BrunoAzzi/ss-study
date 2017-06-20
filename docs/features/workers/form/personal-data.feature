@TestCadastroTrabalhador
Feature: Employee registration
  In order to Register an employee
  As a user
  I want Inform personal data


Scenario: Register an employee wih success
   Given I am on the worker's registration screen
    When When I enter the fields <CPF>, <NOME>, <DATA DE NASCIMENTO>, <CEP>
                                 <CBO>, <NIT>, <CTPS>
    And I click on the button "Salvar e Continuar"
    Then  The table Register a person in charge of the work should close
    Examples:
      |CPF           |NOME       |DATA DE NASCIMENTO|IDADE|CEP     |ENDEREÇO COMPLETO  |CBO |CARGO   |NIT           |CTPS     |DATA DE ADMISSÃO|STATUS|
      |022.587.458-69|Pedro Paulo|27/10/1986        |30   |88058465|R.Joaquim Costa    |5121|Servente|XXX.XXXXX.XX-X|999999999|20/01/2015      |Ativo |
      |045.569.422-20|João Pedro |18/03/1966        |51   |88058465|R.Maria Conceição  |5121|Servente|XXX.XXXXX.XX-X|999999999|15/08/2012      |Ativo |

Scenario: Field validation wih success
 Given I am on the worker's registration screen
  When When I enter the fields <DATA DE NASCIMENTO>, <CBO> and <CEP>
  Then Fields <IDADE>, <CARGO> and <ENDEREÇO> must be completed automatically
    Examples:
      |DATA DE NASCIMENTO|IDADE|CBO     |CARGO   | CEP    |ENDEREÇO COMPLETO |
      |27/10/1986        | 30  | 1864671|Servente|88028400| R.Joaquim Costa  |

Scenario: Address field validation with success
  Given I am on the worker's registration screen
  When When I fill in the fields <CEP> and <ENDEREÇO>
  Then The field <COMPLEMENTO> must be enabled for editing
   Examples:
   |CEP     |ENDEREÇO          |COMPLEMENTO|
   |88058465|R. Maria Conceição|apto 803   |
   |88058465|R. Maria Conceição|apto 705   |


Scenario: Fail to address field validation
   Given I am on the worker's registration screen
   When  I fill in the fields <CEP> and <ENDEREÇO>
   Then The field <COMPLEMENTO> must be enabled for editing
    Examples:
      |CEP     |ENDEREÇO          |COMPLEMENTO|
      |88058465|R. Maria Conceição|¨&¨$$$#$#  |


Scenario: Validation of type of hiring with success
   Given I am on the worker's registrarion screen
    When  I mark on the field <TIPO DE CONTRATAÇÃO> that the worker is third
    Then The field <COMPANY> is editing enabled
      Examples:
        |TIPO DE CONTRATAÇÃO|EMPRESA  |
        |Terceiro           | Senai   |
        |Terceiro           | Sesi    |

Scenario: Fail to Validation of type of hiring
  Given I am on the worker's registrarion screen
  When  I mark on the field <TIPO DE CONTRATAÇÃO> that the worker is third
  Then The field <COMPANY> is editing enabled
   Examples:
     |TIPO DE CONTRATAÇÃO|EMPRESA  |
     |Terceiro           | *(&¨&&%)|
     |Terceiro           |vazio    |
     |Terceiro           | 1223132 |

  Scenario: Validation of type of hiring with success
    Given I am on the worker's registrarion screen
    When  I mark on the field <TIPO DE CONTRATAÇÃO> that the worker is own
    Then The field <COMPANY> Is blocked for editing
     Examples:
     |TIPO DE CONTRATAÇÃO|EMPRESA |
     |Próprio            | blocked|
