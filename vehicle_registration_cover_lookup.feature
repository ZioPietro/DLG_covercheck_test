
Feature: Vehicle Registration Cover Lookup
  Scenario: User enters registration for which cover exists
    Given I am in Vehicle Registration Cover Lookup page

    When I enter valid vehicle registration
       And I click Find Vehicle
     
     Then I should see Cover start and a timestamp
       And I should see Cover end and a timestamp
	   
  Scenario: User enters registration for which cover does not exist
    Given I am in Vehicle Registration Cover Lookup page

    When I enter invalid vehicle registration
       And I click Find Vehicle
     
     Then I should see Sorry record not found
         
  Scenario: User enters invalid registration
    Given I am in Vehicle Registration Cover Lookup page

    When I enter blank
       And I click Find Vehicle
     
     Then I should see Please enter a valid car registration

         
   