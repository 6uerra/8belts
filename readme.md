
<h1 align="center">8Belts Test Automation Challenge</h1>

<div align="center">


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">This repository contains an automation test project for 8belts. The project aims to evaluate the skills of Quality Engineers in test automation.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

The test consists of writing and executing an automated test that performs the following operations using any UI test automation framework based on JavaScript or TypeScript.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```
Node.js (version v18.16.1)
NPM (version 9.5.1)
Google Chrome 
```

### Installing

 step by step series of  that tell you how to get a development env running.

```
npm install
```

Before executing the tests, you need to update the config.properties file located in the project's root directory. This file contains the necessary configuration for the test execution. Update the following values in the config.properties file:

```
username=your_username
password=your_password
url=your_ulr

```

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>

```
npx cucumber-js
```


## 🎈 Test <a name="test"></a>

The test scenarios are created in the feature file using Gherkin language. They are connected to a method in the StepDefinitions classes using annotations like @Given, @When, and @Then. The step definition methods are connected to Task classes for the Given and When steps, where high-level actions are performed. These Task classes can invoke Interactions classes for low-level actions. For the Then step, it communicates with Question classes to perform validations.


## ⛏️ Built Using <a name = "built_using"></a>

- [Cucumber](https://cucumber.io/docs/installation/javascript/) - framework 
- [Selenium](https://www.selenium.dev/) -  Framework
- [JS](https://www.javascript.com/) - Technology
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@Guerra](https://github.com/6uerra) 

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

