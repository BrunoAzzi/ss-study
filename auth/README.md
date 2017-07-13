# Smart-Safety Backend

## Run
To get your backend up and running follow these steps:
1. Get your docker container up and running, he provides a mariadb instance;
2. Import the project in your IDE as a Maven Project;
3. Wait your dependencies be downloaded;
4. Run Application.main(); You will find this in `backend/src/main/java/Application`;

### Docker
In order to run the docker-composer.yml you need to:
1. Be sure that none application is running in ports:
    - `8080`, usually a former installation of apache tomcat run in this port;
    - `3306`, usually a former installation of mysql/mariadb run in this port;
2. Install [Docker](https://docs.docker.com/engine/installation/) and [Docker Compose](https://docs.docker.com/compose/install/);
3. Inside `SmartSafety/backend` run the commands `sudo service mysql stop` and
`sudo docker-compose up --build`;

## Usage
At this point of the development there a no saved user profiles, in order to create a user you will need to:
1. Get a way to send a POST request to the back end (I recomend the [REST advanced client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) from Chrome web store).
2. Send a POST request to `http://localhost:8080/users` with:
    - HEADER: `Content-type: application/json`;
    - BODY:
        ```json
        {
            "email": "your@email.here",
            "password": "yourPasswordHere"
        }
        ```
Ok, ready to go, if you get a status 200 you are ok.

## Properties File

```
spring.datasource.driver-class-name = com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/ssafety_db?nullNamePatternMatchesAll=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
spring.datasource.username = ssafety_usr
spring.datasource.password = secret

spring.mail.host = smtp.gmail.com
spring.mail.port = 587
spring.mail.username = ssafety.app@gmail.com
spring.mail.password = senaisesi
spring.mail.protocol = smtp
spring.mail.tls = true

spring.mail.properties.mail.smtp.auth = true
spring.mail.properties.mail.smtp.starttls.enable = true
spring.mail.properties.mail.smtp.ssl.trust = smtp.gmail.com

smart.safety.recover_password_url = http://localhost:4200/#/recover
smart.safety.email_from = no-reply@smartsafety.org.br

security.basic.enabled = false

endpoints.shutdown.enabled = true

liquibase.change-log = classpath:/liquibase/changelog.xml
liquibase.url = jdbc:mysql://localhost:3306/ssafety_db
liquibase.user = ssafety_usr
liquibase.password = secret
liquibase.drop-first = false

spring.jpa.show-sql=false
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect
```

## Exec JAR

java -jar safety-1.0-SNAPSHOT.jar --spring.config.location=./prod.properties
