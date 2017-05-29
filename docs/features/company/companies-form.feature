@TOCODE
Feature: Companies data form
  In order manage companies
  As a user
  I want to manage companies data with a form

  Scenario: Submitting the company data form correctly
    Given I am at a new company form page
    When I fill the data form with the following data:
      | type    | description            | cnpj                | cnae                                 | social_name             | fantasy_name      | cep       | address             | neighborhood | city          | email                         | phone         | fax           | url                         |
      | Serviço | Manutenção de máquinas | 144.214.123/0001-10 | Desenvolvimento de obras lorem ipsum | CONSTRUTORA DIMAS LTDA. | DIMAS CONSTRUTORA | 88025-400 | R. Joaquim Cost, 22 | Coqueiros    | Florianópolis | dimas@construtoradimas.com.br | (48)3253-2525 | (48)3253-2525 | www.construtoradimas.com.br |
    And submit the data form
    Then I see a success message

  Scenario: Submitting the responsible form correcly
    Given I am at a company form page with filled company data
    When I fill the responsible of the company form with the following data:
      | name              | position | phone         | fax           | email                         |
      | João Carlos Alves | Diretor  | (48)3253-2525 | (48)3253-2525 | dimas@construtoradimas.com.br |
    And submit the responsible form
    Then I see a success message

  Scenario: Submitting the contact form correcly
    Given I am at a company form page with filled company data
    When I fill the contact of the company form with the following data:
      | name              | position | phone         | fax           | email                         |
      | João Carlos Alves | Diretor  | (48)3253-2525 | (48)3253-2525 | dimas@construtoradimas.com.br |
    And submit the contact form
    Then I see a success message

  Scenario: Submitting the extra information form correcly
    Given I am at a company form page with filled company data
    When I fill the extra information form with the following data:
      | has_sesmt | has_cipa | members_number | cipa_designated |
      | false     | false    | 10             | false           |
    And submit the extra information form
    Then I see a success message
