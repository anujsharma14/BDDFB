package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class Loginpage extends TestBase {
	public Loginpage() {
		PageFactory.initElements(driver, this);
	}

	public static WebDriver driver;
	public static WebElement element;

	@FindBy(id = "email")
	public WebElement userid;
	@FindBy(id = "pass")
	public WebElement passid;
	@FindBy(xpath = "//input[@type='submit']")
	public static  WebElement loginbtn;

}
