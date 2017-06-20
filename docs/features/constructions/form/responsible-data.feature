@testDadosdosResponsaveis
Feature: Register a person in charge of the work
  In order to Register a civil engineer and a job security technician
  As a user
  I need input the obrigatory fields

Scenario: Register a civil engineer with success
   Given  That I am in the register of those responsible
    When  I inform in the fields <Engenheiro Responsável Pela Obra>,
                                 <Telefone>,
                                 <E-mail>
   And I click on the button "Salvar e Continuar"
   Then  The table Register a person in charge of the work should close
      Examples:
          | Engenheiro | Telefone | E-mail            |
          | José       | 48999999 | jose@email.com.br |
          | João       | 48999999 | joao@email.com.br |
          | João       | vazio    | joao@email.com.br |

  Scenario: Fail to register a civil engineer
     Given  That I am in the register of those responsible
      When  I inform in the fields <Engenheiro Responsável Pela Obra>,
                                         <Telefone>,
                                         <E-mail>
       And I click on the button "Salvar e Continuar"
       Then  I should see an error message
            Examples:
                | Engenheiro | Telefone | E-mail            |
                |  vazio     | 48999999 | jose@email.com.br |
                |  Jo        | 48999999 | joao@email.com.br |
                |João Carlos | 48999999 | vazio             |
                |vazio       | vazio    | vazio             |
                |vazio       | 48999999 | vazio             |

  Scenario: Register a job security technician with success
     Given  That I am in the register of those responsible
       When  I inform in the fields <Técnico em Segurança Responsável Pela Obra>,
                                                 <Telefone>,
                                                 <E-mail>
        And I click on the button "Salvar e Continuar"
        Then  The table Register a person in charge of the work should close
              Examples:
               | Técnico em Segurança | Telefone | E-mail               |
               |   Roberto            | 48999999 | roberto@email.com.br |
               |   Carlos             | vazio    | carlos@email.com.br  |
               |   Ricardo            | vazio    | vazio                |

 Scenario Outline: Block the registration fields of the civil engineer and the job security technician when non-accepted characters are entered
      Given  That I am in the register of those responsible
      When   I Inform in the fields <Engenheiro Responsável Pela Obra>,
                                <Técnico em Segurança Responsável Pela Obra>
                                 <Telefone>,
                                 <E-mail>
      Then Fields must be locked for typing
             Examples:
              |Engenheiro Responsável Pela Obra   | Técnico em Segurança | Telefone | E-mail|
              |              @#!$                  |   @(*())             | abc      | $%¨&*() *Exceto @ . _*|
