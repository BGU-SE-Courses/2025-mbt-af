/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URLmoodle = 'https://sandbox.moodledemo.net/';

const xpaths = {
  homePageWindow: {
    loginButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/div[1]/div/ul/li/div/div[2]/div/div[1]/div/p[2]/a',
  },
  loginWindow: {
    userInput: '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/form[1]/div[1]/input',
    passwordInput: '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/form[1]/div[2]/div/input',
    loginButton: '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/form[1]/div[3]/button'
  },
  dashboardWindow: {
    myCoursesButton: '/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a',
    profileButton: '/html/body/div[2]/nav/div/div[2]/div[5]/div/div/a',
    logoutButton: '/html/body/div[2]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[9]'
  },
  coursesWindow: {
    dotCourseButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[2]/div/div/button/i',
    starButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[2]/div/div/div/a[1]',
    starVerificationIcon: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[1]/div/div/a/span[1]/span/i',
    profileButton: '/html/body/div[2]/nav/div/div[2]/div[5]/div/div/a',
    logoutButton: '/html/body/div[2]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[9]'
  },


  hideCourseWindow: {
    myCoursesButton: '/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a',
    dotCourseButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/button/i',
    removeFromViewButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div/a[4]'
  },
  hiddenCourseVerification: {
    courseList: "//div[contains(@class, 'coursebox')]//div[contains(text(), 'My first course')]"
  }
};