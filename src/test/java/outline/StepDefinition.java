package outline;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When; 



public class StepDefinition {
	 WebDriver driver = null; 
		
	 	@Given("^user navigates to Facebook$")
	   public void goToFacebook() { 
	 	File file = new File("C:/Users/krishna.devagupthapu/Downloads/IEDriverServer_x64_3.0.0/IEDriverServer.exe");
		System.setProperty("webdriver.ie.driver", file.getAbsolutePath());	
	      driver = new InternetExplorerDriver(); 
	      driver.navigate().to("https://www.facebook.com/"); 
	   } 
		
	  @When("^I enter Username as username(\\d+) and Password as password(\\d+)$")
	   public void I_enter_Username_as_and_Password_as(String arg1, String arg2) {
	      driver.findElement(By.id("email")).sendKeys(arg1);
	      driver.findElement(By.id("pass")).sendKeys(arg2);
	      driver.findElement(By.id("u_0_v")).click(); 
	   } 
		
	   @Then("^login should be unsuccessful$") 
	   public void validateRelogin() { 
	      if(driver.getCurrentUrl().equalsIgnoreCase(
	      "https://www.facebook.com/login.php?login_attempt=1&lwv=110")){
	         System.out.println("Test Pass"); 
	      } else { 
	         System.out.println("Test Failed"); 
	      } 
	      driver.close(); 
	   }    
}
