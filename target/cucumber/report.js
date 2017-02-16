$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('outline\scenarioutline.feature');
formatter.feature({
  "line": 1,
  "name": "Scenario Outline",
  "description": "",
  "id": "scenario-outline",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Login functionality for a social networking site",
  "description": "",
  "id": "scenario-outline;login-functionality-for-a-social-networking-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to Facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as username1 and Password as password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.goToFacebook()"
});
formatter.result({
  "duration": 4932526880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefinition.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 587396780,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Unable to find element on closed window (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 579 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027CPX-8EFOK6GSTXL\u0027, ip: \u0027192.168.15.222\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:44827/, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 2edf295c-8501-4a87-a66f-9094239f25e6\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat outline.StepDefinition.I_enter_Username_as_and_Password_as(StepDefinition.java:29)\r\n\tat ✽.When I enter Username as username1 and Password as password1(outline\\scenarioutline.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.validateRelogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Login functionality for a social networking site",
  "description": "",
  "id": "scenario-outline;login-functionality-for-a-social-networking-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to Facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as username2 and Password as password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.goToFacebook()"
});
formatter.result({
  "duration": 4070266551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefinition.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 567583479,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Unable to find element on closed window (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 567 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027CPX-8EFOK6GSTXL\u0027, ip: \u0027192.168.15.222\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:36482/, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 9c76deda-3266-436a-afd0-819ed68df245\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat outline.StepDefinition.I_enter_Username_as_and_Password_as(StepDefinition.java:29)\r\n\tat ✽.When I enter Username as username2 and Password as password2(outline\\scenarioutline.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.validateRelogin()"
});
formatter.result({
  "status": "skipped"
});
});