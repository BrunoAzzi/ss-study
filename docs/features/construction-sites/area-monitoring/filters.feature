Feature: Filter markers on the floor

    In order to facilitate on finding specific markers
    As a user
    I want to filter markers

    Scenario: Filter all markers but "sensor"
        Given the following markers exists for the current floor
            | marker                | type        | position |
            | Rodrigo Vicente       | RISK_ACCESS |          | 
        When deselect all filters
        And select "sensor" filter
        Then I see only the "sensor" markers on the map