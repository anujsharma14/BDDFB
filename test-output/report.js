$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/New folder/FBLogingBDD/src/main/java/com/qa/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login FB",
  "description": "",
  "id": "login-fb",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login To FB Successsfully",
  "description": "",
  "id": "login-fb;login-to-fb-successsfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user launches browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user on login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 23859920699,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 13682401,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 98515700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat com.qa.stepdefinition.LoginStepDefinition.user_clicks_on_login_button(LoginStepDefinition.java:34)\r\n\tat ✽.Then user clicks on login button(D:/New folder/FBLogingBDD/src/main/java/com/qa/features/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
});