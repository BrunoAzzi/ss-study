Feature: Floor navigation

    In order to monitor areas by floor map
    As a user
    I want to navigate between the floors

    Scenario: Navigating between floors
        Given I am at the area monitoring scree 
        And the following markers exists for the current floor
            | floor_name | tower_name |
            | 10         | Torre 2    |
            | 9          | Torre 2    |
        And I am currently on the floor named "10"
        When select the floor named "9"
        Then I see the floor named "10" map showing