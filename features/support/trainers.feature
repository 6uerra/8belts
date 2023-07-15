@trainer
Feature: Trainers

Scenario: Create a new trainer with fictitious data
    Given I have logged in
    When I go to the "Listado de trainers" section
    And I create a new trainer with random data
    Then I verify that the trainer has been successfully created