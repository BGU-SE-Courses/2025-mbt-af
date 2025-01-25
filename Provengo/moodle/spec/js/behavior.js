// @provengo summon selenium
// @provengo summon constraints

bthread('studentMarkCourseAsStar', function () {
  let s1 = new SeleniumSession("studentMarkCourseAsStar");
  s1.start(URLmoodle)
  LoginStudent(s1, {userName: 'student', password: 'sandbox24'});
  goToMyCourses(s1);
  markCourseAsStar(s1);
});

bthread('teacherHideCourse', function () {
  let s = new SeleniumSession("teacherSession");
  s.start(URLmoodle);
  // sync({request: Event("End(LoginTeacher)")},
  LoginAdmin(s, {userName: 'teacher', password: 'sandbox24'});
  // sync({request: Event("End(goToMyCourses)")},
  goToMyCourses(s);
  // sync({request: Event("End(hideCourseAndContinue)")},
  hideCourseAndContinue(s);
});

bthread("MakeSureStudentCantMarkHiddenCourse", function () {
  sync({waitFor: Event("Start(hideCourseAndContinue)")});
  sync({block: Event("Start(markCourseAsStar)")});
});

bthread("MakeSureStudentSeesCourseHidden", function () {
  sync({waitFor: Event("End(hideCourseAndContinue)")});
  sync({waitFor: Event("End(goToMyCourses)")});
  sync({request: Event("Start(AssertCourseNotExists)")});
});