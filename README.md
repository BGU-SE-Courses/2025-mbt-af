# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [moodle](https://sandbox.moodledemo.net/).

Moodle is a widely used open-source learning management system (LMS) designed for delivering online courses and educational content. It offers educators a platform to create, manage, and facilitate interactive courses, assessments, and collaborative activities.

## Installation
1. Visit downloads.moodle.org/windows and download the latest stable version.
2. Extract the downloaded file.
3. Click "Start Moodle" to launch the setup.
4. Follow the on-screen instructions to create the database and set up the first admin user.
5. Once the setup is complete, click "Stop Moodle".
6. From this point forward, clicking "Start Moodle" will automatically launch the website.

## What we tested
We tested the courses module that allows students to mark as star courses, and for teachers to hide courses.
We chose to test the following user stories:

*User story:* A student chooses a course he is enrolled to and mark it as star.

*Preconditions:* There is a course with a student

*Expected outcome:* The course is marked as star

*User story:* A teacher chooses a course and hides it.

*Preconditions:* There is a course with a teacher

*Expected outcome:* The course has been hidden.

## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
All tests passed successfully. and all README files are updated with the results of the tests.