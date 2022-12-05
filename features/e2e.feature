Feature: Bootcamp E2E

Background: 
Given I open home page 


Scenario:
When I enter "Windows" in search bar
Then I see  item results

Examples:
|item   |
|Windows|

Scenario:
When I open "Today's Best Deals" tab
Then I go to the main page

Examples:
|page     |
|Today's Best Deals|



