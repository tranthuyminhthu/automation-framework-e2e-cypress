import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given("precondition", ()=> {
    cy.visit("http://demo.guru99.com/test/newtours/");

})

When("action", ()=> {
    cy.title().should('eq', 'Welcome: Mercury Tours');
})

Then("testable outcome", ()=> {
    cy.title().should('eq', 'Welcome: Mercury Tours');
})