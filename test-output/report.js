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
  "name": "user click on login btn",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user is on login page"
    }
  ],
  "line": 8,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launches_browser()"
});
formatter.result({
  "duration": 18546245900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1303400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.qa.util.TestBase.loginbuttton(TestBase.java:53)\r\n\tat com.qa.stepdefinition.LoginStepDefinition.user_clicks_on_login_button(LoginStepDefinition.java:34)\r\n\tat ✽.When user click on login btn(D:/New folder/FBLogingBDD/src/main/java/com/qa/features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
});