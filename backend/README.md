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
