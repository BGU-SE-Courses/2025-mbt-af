/* @provengo summon selenium */

function LoginStudent(session, e) {
  sync({ request: Event("Start(LoginStudent)") });

  session.click(xpaths.homePageWindow.loginButton);
  session.writeText(xpaths.loginWindow.userInput, e.userName);
  session.writeText(xpaths.loginWindow.passwordInput, e.password);
  session.click(xpaths.loginWindow.loginButton);
}

function LoginAdmin(session, e) {
  sync({ request: Event("Start(LoginAdmin)") });

  session.click(xpaths.homePageWindow.loginButton);
  session.writeText(xpaths.loginWindow.userInput, e.userName);
  session.writeText(xpaths.loginWindow.passwordInput, e.password);
  session.click(xpaths.loginWindow.loginButton);
}

function goToMyCourses(session, e) {
  sync({ request: Event("Start(goToMyCourses)") });

  session.click(xpaths.dashboardWindow.myCoursesButton);
}

function markCourseAsStar(session, e) {
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
  sync({ request: Event("Start(hideCourseAndContinue)") });

  session.click(xpaths.hideCourseWindow.removeFromViewButton);
  session.click(xpaths.hiddenCourseVerification.courseList);
}

function teacherLogout(session, e) {
  sync({ request: Event("Start(teacherLogout)") });
  session.click(xpaths.dashboardWindow.profileButton);
  session.click(xpaths.dashboardWindow.logoutButton);
}
