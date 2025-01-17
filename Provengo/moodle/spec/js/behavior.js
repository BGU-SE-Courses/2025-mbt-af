// @provengo summon selenium
// @provengo summon constraints

bthread('studentMarkCourseAsStar', function () {
  let s1 = new SeleniumSession("studentSession").start(URLmoodle);

  sync({request: Event("End(LoginStudent)")}, LoginStudent(s1, {userName: 'student', password: 'sandbox24'}));
  sync({request: Event("End(goToMyCourses)")}, goToMyCourses(s1));

  interrupt(Event("Start(hideCourseAndContinue)"), function (){
    sync({request: Event("End(markCourseAsStar)")}, markCourseAsStar(s1));
  });
});

bthread('teacherHideCourse', function () {
  let s = new SeleniumSession("teacherSession").start(URLmoodle);

  sync({request: Event("End(LoginTeacher)")}, LoginAdmin(s, {userName: 'teacher', password: 'sandbox24'}));
  sync({request: Event("End(goToMyCourses)")}, goToMyCourses(s));
  sync({request: Event("End(hideCourseAndContinue)")}, hideCourseAndContinue(s));
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
