automation-framework-e2e-cypress
This repository contains an end-to-end (E2E) automation framework built with Cypress for testing web applications. It includes setup instructions, how to run tests locally, and how to run tests in headless mode.

Table of Contents
Installation
Running Tests Locally
Running Tests in Headless Mode
Folder Structure
Additional Information
Installation
Before running tests, make sure you have Node.js and npm (or yarn) installed on your system.

Clone the repository:

git clone https://github.com/tranthuyminhthu/automation-framework-e2e-cypress.git
Navigate to the project directory:

cd automation-framework-e2e-cypress
Install dependencies: Using npm:

npm install
Or using yarn:

yarn install
This will install all the necessary dependencies, including Cypress.

Running Tests Locally
To run the tests locally in the Cypress Test Runner:

Open Cypress:

npx cypress open
This will open the Cypress Test Runner in your default browser, where you can choose which test to run interactively.

You can run any of the tests available in the cypress/integration folder.

Running Tests in Headless Mode
To run the tests without opening the Cypress Test Runner (headless mode), you can use the following command:

Run all tests in headless mode:

npx cypress run
This will execute all the tests in headless mode and provide results in the terminal.

Run tests for a specific spec file:

npx cypress run --spec "cypress/integration/myTest.spec.js"
Replace "cypress/integration/myTest.spec.js" with the path to the specific test file you want to run.

Run tests with a specific browser: You can specify the browser to use in headless mode by adding the --browser flag:

npx cypress run --browser chrome
By default, Cypress will use Electron in headless mode. If you want to run the tests in a different browser like Chrome or Firefox, specify it using the --browser option.

Running tests with custom configurations: You can also run tests with different configurations by using environment variables:

npx cypress run --config video=true --env ENV=staging