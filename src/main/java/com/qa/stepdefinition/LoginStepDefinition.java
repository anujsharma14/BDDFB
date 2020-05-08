package com.qa.stepdefinition;

import static org.junit.Assert.assertEquals;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import com.qa.pages.Loginpage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends TestBase {

	@Given("^user launches browser$")
	public void user_launches_browser() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		TestBase.initialization();

	}

	@When("^user on login page$")
	public void user_on_login_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String fbtitle = driver.getTitle();
		Assert.assertEquals("Facebook – log in or sign up", fbtitle);
	}
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		Loginpage loginpage= new Loginpage();
		loginpage.loginbtn.click();
		
		}


	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {

	
	}


}
