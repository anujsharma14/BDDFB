package com.qa.testrunner;

import org.junit.runner.RunWith;

import org.junit.Assert;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:/New folder/FBLogingBDD/src/main/java/com/qa/features/Login.feature", glue = {
		"com/qa/stepdefinition" }, format = { "pretty", "html:test-output",
				"junit:junit_xml/cucumber.xml" }, monochrome = true, dryRun = false, strict = true)
public class TestRunner {

}
