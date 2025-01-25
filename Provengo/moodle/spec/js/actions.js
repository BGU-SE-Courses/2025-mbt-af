/* @provengo summon selenium */

function LoginStudent(session, e) {
  with (session) {
    sync({request: Event("Start(LoginStudent)")});
    click(xpaths.homePageWindow.loginButton, 5000);
    writeText(xpaths.loginWindow.userInput, e.userName);
    writeText(xpaths.loginWindow.passwordInput, e.password);
    click(xpaths.loginWindow.loginButton, 5000);
    sync({request: Event("End(LoginStudent)")});
  }
}

function LoginAdmin(session, e) {
  with (session) {
    sync({request: Event("Start(LoginAdmin)")});
    click(xpaths.homePageWindow.loginButton, 5000);
    writeText(xpaths.loginWindow.userInput, e.userName);
    writeText(xpaths.loginWindow.passwordInput, e.password);
    click(xpaths.loginWindow.loginButton, 5000);
    sync({request: Event("End(LoginAdmin)")});
  }
}

function goToMyCourses(session, e) {
  sync({ request: Event("Start(goToMyCourses)") });
  session.click(xpaths.dashboardWindow.myCoursesButton);
  sync({request: Event("End(goToMyCourses)")});
}

function markCourseAsStar(session, e) {
  sync({waitFor: Event("End(goToMyCourses)")});
  sync({ request: Event("Start(markCourseAsStar)") });
  session.click(xpaths.coursesWindow.dotCourseButton);
  session.click(xpaths.coursesWindow.starButton);
}

function AssertCourseNotExists(session, e) {
  sync({ request: Event("Start(AssertCourseNotExists)") });
  session.waitForVisibility(xpaths.hiddenCourseVerification.courseList);
}

function studentLogout(session, e) {
  sync({ request: Event("Start(studentLogout)") });
  session.click(xpaths.coursesWindow.profileButton);
  session.click(xpaths.coursesWindow.logoutButton);
}

function hideCourseAndContinue(session, e) {
  sync({waitFor: Event("End(goToMyCourses)")});
  sync({ request: Event("Start(hideCourseAndContinue)") });
  session.click(xpaths.hideCourseWindow.dotCourseButton);
  session.click(xpaths.hideCourseWindow.removeFromViewButton);
  session.click(xpaths.hiddenCourseVerification.courseList);
  sync({ request: Event("End(hideCourseAndContinue)") });
}

function teacherLogout(session, e) {
  sync({ request: Event("Start(teacherLogout)") });
  session.click(xpaths.dashboardWindow.profileButton);
  session.click(xpaths.dashboardWindow.logoutButton);
}