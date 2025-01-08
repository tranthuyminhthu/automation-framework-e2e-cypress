Feature: Management User

  Scenario: Add user with role Admin scuccessfully
    Given I am on the login page
    When I select user role "Admin" in drop down list "User Role"
    When I type "T" on field "Employee Name"
    Then Drop down list "Employee Name" will show 
    When I select first option on drop down list
    When I select status "Enable" in drop down list "Status"
    When I type valid username on file "Username"
    When I type valid password on field "Password"
    When I type valid password on field "Confirm Password"
    When I click on "Save" button
    Then System will show message add user scuccessfully