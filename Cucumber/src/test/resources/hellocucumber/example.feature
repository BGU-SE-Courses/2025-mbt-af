Feature: A set of scenarios for testing the courses module

  @Student
  Scenario Outline: Student marks a course as a favorite
    Given Student navigated to the Home Page
    When Student logged in using "<Username>" and "<Password>"
    And Student selected a course to mark as a favorite
    Then Course is successfully marked as a favorite

    Examples:
      | Username     | Password  |
      | student      | sandbox24 |

  @Teacher
  Scenario Outline: Teacher removes a course
    Given Teacher is on the Home Page
    When Teacher logs in with "<Username>" and "<Password>"
    And Teacher hide a course
    Then The course is successfully hidden from Moodle

    Examples:
      | Username     | Password  |
      | teacher      | sandbox24 |
