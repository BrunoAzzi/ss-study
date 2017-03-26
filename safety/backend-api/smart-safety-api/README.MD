# Smart Safety API

## Banco de Dados

No estágio atual ddo desenvolvimento, está sendo utilizado JPA para criação da primeira versão do banco de dados.

Uma vez homologado, é possível alterar para o padrão Liquibase/DataMapper desejado, gerando automaticamente o changeLog.xml com o plugin do Maven.

Vide: http://www.baeldung.com/liquibase-refactor-schema-of-java-app

## Lombok Plugin

O uso do plugin Lombok permite a criação de um modelo mais robusto e com menos código.

Através de anotações são gerados automaticamente os getters, setters, construtores e métodos de comparação.

Está disponível para as principais IDEs.

Vide: https://projectlombok.org/download.html

## Sonar Qube

Está sendo usado o servidor Sonar Qube para análise estática de código.

Em sua primeira versão, o projeto foi criado com aprovação de 100% na análise do servidor.

Para melhores informações, vide: https://www.sonarqube.org/

## Jenkins

Está sendo usado o servidor Jenkins de Integração Contínua (IC).

No momento, por conta da existência de múltiplos projetos no mesmo repositório, o processo de IC está prejudicado:

1. Configuração mais extensa no Jenkins para uso de sparse-checkout do Git
2. Necessário checkout de todos os 25 MB do repositório para build que precisa de apenas 130 Kb.
3. Jenkins é acionado pelos commits de outros projetos do mesmo repositório (frontend e mobile).
4. diversas ferramentas e plugins que seguem o padrão Gradle (arquivos de build na raiz do repositório), não podem ser utilizados.

Vide: https://guides.gradle.org/creating-new-gradle-builds/

## Testes Automatizados

Para os testes, o padrão Fluent está sendo seguido, com o uso do framework Spek.

Para melhores informações, veja:

http://fluentassertions.com/

http://spekframework.org/

## Microservices e JPA

De acordo com o livro: *Microservices Best Practices for Java*
(Michael Hofmann, Erin Schnabel, Katherine Stanley, IBM Redbooks)

http://www.redbooks.ibm.com/redbooks/pdfs/sg248357.pdf

O uso de JPA é perfeitamente compatível com a arquitetura de Microservices e APIs REST.

Isto pode ser encontrado na página 56 do livro:

Suitability of JPA for data handling in microservices*

The following list shows some arguments why JPA is useful for data handling in your microservices:

1. Defining your microservices from the perspective of Domain Driven Design leads to the situation where most of the microservices need only simple queries to persist their entities (simple create, retrieve, update, and delete operations). JPA's EntityManager has these create, retrieve, update, and delete methods that you need: persist, find, merge, delete).
2. Not much programming is needed to call these methods.
3. In some cases, the queries get more complex. These queries can be done with the query language defined in JPA: JPQL. The need for complex queries should be an exceptional case. JSON documents with a hierarchy of entity data should each be stored separately. This leads to simple IDs and simple queries.
4. JPA is standardized and has a great community to support you in developing your microservice. All Java EE servers must support JPA.
5. To implement microservices not running in a Java EE container, you can also use JPA.
6. Generating entity classes from the database (reverse engineering) can reduce the number of lines of code you must implement by yourself.
7. For polyglot persistence, JPA has support for a relational data store and a document-oriented data store (EclipseLink).
8. JPA as an abstraction of the relational database allows you to exchange your relational data store with another relational data store if you need to. This portability prevents your microservice from a vendor lock in.
9. To implement the strategy, every microservice should have its own schema in a relational database, you can set the default schema for your service in the JPA configuration file persistence.xml.

