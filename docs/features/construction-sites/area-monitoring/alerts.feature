Feature: Alerts

    In order to view problematic events on the construction site
    As a user
    I want to view alerts that happened on the floor

    Scenario: Risk access alert viewing
        Given the following alerts exists for the current floor
            | related_peer          | sensor_id | type        | time  |
            | Rodrigo Vicente       |           | RISK_ACCESS | 10:10 | 
            | João da Silva Antunes | 12842     | RISK_ACCESS | 10:00 |
            | Camila Rodrigues      |           | RISK_ACCESS | 09:08 |
            |                       | 12842     | LOW_BATTERY | 10:10 |
            | João da Silva Antunes |           | LOW_BATTERY | 10:10 |
        When I click on the alerts tab
        Then I see a popover listing all the alerts in decrescent time order