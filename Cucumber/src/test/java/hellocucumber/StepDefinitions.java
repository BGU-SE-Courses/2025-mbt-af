package hellocucumber;
import io.cucumber.java.en.*;
import io.cucumber.java.After;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;



public class StepDefinitions {

    private final static String CHROME_DRIVER_PATH = "C:\\Users\\adarg\\Documents\\GitHub\\2025-mbt-af\\Selenium\\chromedriver.exe";
    private ChromeDriver driver;
    private WebDriverWait wait;


    // Initializes a new session and navigate the student to Moodle home page
    @Given("Student navigated to the Home Page")
    public void studentNavigatesToHomePage() {
        WebDriverManager.chromedriver().setup();
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(60));

        driver.manage().window().maximize();
        driver.get("https://sandbox.moodledemo.net/");
    }

    // Logs the student into Moodle with the username and password
    @When("Student logged in using {string} and {string}")
    public void StudentLoggedInWithUsernameAndPassword(String Username, String Password) {

        // Navigate to the login page
        driver.findElement(By.xpath("//div[1]/div[1]/p[2]/a[1]")).click();

        //Enter username and password
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[2]/div/div/section/div/div/div/div/form[1]/div[1]/input"))).sendKeys(Username);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[2]/div/div/section/div/div/div/div/form[1]/div[2]/div/input"))).sendKeys(Password);

        // Click the login button
        driver.findElement(By.xpath("//div[3]/button[1]")).click();
        waitForPageLoad();

    }

    // Student selects a course and marks it as a favorite (stars it)
    @And("Student selected a course to mark as a favorite")
    public void studentMarksCourseAsFavorite() {

        // Click "My Courses"
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a"))).click();

        // Open course options
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[2]/div/div/button/i"))).click();

        // Click "Star this course"
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[2]/div/div/div/a[1]"))).click();
        waitForPageLoad();

    }

    // Verifies that the course has been successfully marked as a favorite
    @Then("Course is successfully marked as a favorite")
    public void verifyCourseIsMarkedAsFavorite() {

        // Check that the star icon is visible
        WebElement star = driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[1]/div/div/a/span[1]/span/i"));
        String starClass = star.getAttribute("class");

        Pattern pattern = Pattern.compile("\\btext-primary-hidden\\b");
        Matcher matcher = pattern.matcher(starClass);

        assertFalse(matcher.find());

        waitForPageLoad();

    }

    // Logs out the student from the Moodle site
    @After("@Student")
    public void StudentLogsOut() {

        //Press drop menu on the right
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/div/a"))).click();

        //press Log out
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[9]"))).click();

        waitForPageLoad();
        driver.quit();
    }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Initializes a new session and navigates the teacher to the Moodle home page
    @Given("Teacher is on the Home Page")
    public void teacherNavigatesToHomePage() {
        WebDriverManager.chromedriver().setup();
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(60));

        driver.manage().window().maximize();
        driver.get("https://sandbox.moodledemo.net/");
    }


    // Logs the teacher into Moodle using the provided username and password
    @When("Teacher logs in with {string} and {string}")
    public void TeacherLoggedInWithUsernameAndPassword(String Username, String Password) {
        // Navigate to the login page
        driver.findElement(By.xpath("//*[@id=\"usernavigation\"]/div/div/span/a")).click(); //From home page to log-in (top right)
        // Enter username and password
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys(Username);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[2]/div/div/section/div/div/div/div/form[1]/div[2]/div/input"))).sendKeys(Password);
        // Click the login button
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click(); // Login
        waitForPageLoad();
    }

    // Teacher navigates to a course and deletes it
    @And("Teacher hide a course")
    public void teacherDeletesCourse() {
        // Click "My Courses"
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a")))).click();

        //Open course options
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div[1]/div/div[2]/div/div/button/i")))).click();

        //Clicks "Remove from view"
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("//div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[4]")))).click();

    }

    @Then("The course is successfully hidden from Moodle")
    public void verifyCourseHidden() {

        // Check that the element for 'My first course' is not present or visible
        List<WebElement> courseTiles = driver.findElements(By.xpath("//div[contains(@class, 'coursebox')]//div[contains(text(), 'My first course')]"));
        assertTrue(courseTiles.isEmpty(), "The course 'My first course' is still visible.");

    }


    // Logs the teacher out of Moodle
    @After("@Teacher")
    public void teacherLogsOut() {

        //Press drop menu on the right
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/div/a/span/span/span/span"))).click();

        //press Log out
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[9]"))).click();

        waitForPageLoad();
        driver.quit();
    }

    private void waitForPageLoad() {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
